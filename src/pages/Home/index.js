import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchUserRequest } from '~/store/modules/user/actions';

import { Container, Content, Input, SearchButton } from './styles';

import logo from '~/assets/github-logo.png';

export default function Home() {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  function handleSearch(event) {
    event.preventDefault();

    dispatch(searchUserRequest(username));
  }

  return (
    <Container>
      <h1>Github finder</h1>
      <Content onSubmit={handleSearch}>
        <img src={logo} alt="Github finder" />
        <Input
          name="username"
          type="text"
          placeholder="Digite o username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <SearchButton>Procurar</SearchButton>
      </Content>
    </Container>
  );
}
