import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './styles.sass';

export default function Commits() {
  const commits = useSelector(state => state.commit.commits);

  const [filteredCommits, setFilteredCommits] = useState(commits);
  const [filter, setFilter] = useState('');

  function handleFilter(event) {
    event.preventDefault();

    const commitsFiltered = commits.filter(commitData =>
      commitData.commit.message.toLowerCase().includes(filter)
    );

    setFilteredCommits(commitsFiltered);
  }

  return (
    <div className="commit-container">
      <h1 className="title">Commits</h1>
      <form className="search-content" onSubmit={handleFilter}>
        <input
          className="filter-input"
          name="filter"
          type="text"
          placeholder="Digite o termo para filtro"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
        <button className="filter-button" type="submit">
          Filtrar
        </button>
      </form>
      {filteredCommits.slice(0, 20).map(commitData => (
        <div className="commit" key={commitData.sha}>
          <strong>Autor: {commitData.commit.author.name}</strong>
          <span>Mensagem: {commitData.commit.message}</span>
        </div>
      ))}
    </div>
  );
}
