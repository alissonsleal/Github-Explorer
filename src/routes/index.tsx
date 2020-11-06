import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from '../styles/global';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/repository" component={Repository} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default Routes;
