
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from 'pages/Landing/Landing';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
import Dashboard from 'pages/Dashboard/Dashboard';
import CreateProfile from 'components/profile-forms/CreateProfile';
import NotFound from 'pages/NotFound/NotFound';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/create-profile' component={CreateProfile} />
        <Route path='*' component={NotFound} />
      </Switch>
    );
  }

  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};