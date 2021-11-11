import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InitialRoute from '../InitialRoute';

const AuthenticatedApp: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <InitialRoute />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AuthenticatedApp;
