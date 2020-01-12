import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '~/pages/Home';
import Repositories from '~/pages/Repositories';
import Commits from '~/pages/Commits';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repositories" component={Repositories} />
      <Route path="/commits" component={Commits} />
    </Switch>
  );
}
