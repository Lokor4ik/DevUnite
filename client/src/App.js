import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/commons/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import { Provider } from 'react-redux';
import store from './store/store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './store/auth/action';

import './App.scss';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="main-wrapper">
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
