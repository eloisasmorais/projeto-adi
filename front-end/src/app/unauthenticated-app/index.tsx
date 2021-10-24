import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './views/login';

const UnauthenticatedApp: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default UnauthenticatedApp;
