import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Routes from './routes';

import store from '~/store';
import history from '~/services/history';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}
