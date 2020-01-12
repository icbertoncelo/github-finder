import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchUserRequest } from '~/store/modules/user/actions';

import './styles.sass';

import logo from '~/assets/github-logo.png';

export default function Home() {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  function handleSearch(event) {
    event.preventDefault();

    dispatch(searchUserRequest(username));
  }

  return (
    <div className="home-container">
      <h1>Github finder</h1>
      <form className="content" onSubmit={handleSearch}>
        <img src={logo} alt="Github finder" />
        <input
          className="text-input"
          name="username"
          type="text"
          placeholder="Digite o username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <button className="search-button" type="submit">
          Procurar
        </button>
      </form>
    </div>
  );
}
