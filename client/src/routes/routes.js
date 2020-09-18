
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Dashboard from 'pages/Dashboard/Dashboard';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Redirect to="/dashboard" />
        <div />
      </Switch>
    );
  }

  return (
    <>
      <Route exact path='/' component={Landing} />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};