import React, { useEffect } from 'react';
import { useRoutes } from 'routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/commons/Navbar/Navbar';
import Loader from 'components/commons/Loader/Loader';
import { loadUser } from './store/auth/action';

import 'antd/dist/antd.css';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector(state => state.auth);
  const routes = useRoutes(isAuthenticated);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="main-wrapper">
        <Navbar isAuthenticated={isAuthenticated} />
        {routes}
      </div>
    </Router>
  );
}

export default App;
