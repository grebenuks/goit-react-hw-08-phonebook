import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';

export const useRouter = auth => {
  if (auth) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );
};
