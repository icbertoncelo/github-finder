import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { searchCommitsRequest } from '~/store/modules/commit/actions';

import './styles.sass';

export default function Repositories() {
  const dispatch = useDispatch();

  const repositories = useSelector(state => state.user.repositories);

  function handleSearchCommits(repository, owner) {
    dispatch(searchCommitsRequest(repository, owner));
  }

  return (
    <div className="repos-container">
      <h1 className="title">Repositórios</h1>
      {repositories.map(repository => (
        <button
          key={repository.id}
          className="repository"
          type="button"
          onClick={() =>
            handleSearchCommits(repository.name, repository.owner.login)
          }
        >
          <strong>Nome: {repository.name}</strong>
          <span>Descrição: {repository.description}</span>
        </button>
      ))}
    </div>
  );
}
