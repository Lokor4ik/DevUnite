
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path='/dashboard' component={() => <div>DASHBOARD</div>} />
        <Redirect to="/dashboard" />
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