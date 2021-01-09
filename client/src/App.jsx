import React, { useEffect } from 'react';
import { useRoutes } from 'routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadUser } from 'store/auth/action';
import { getCurrentProfile } from 'store/profile/action';
import Navbar from 'components/commons/Navbar/Navbar';
import Loader from 'components/commons/Loader/Loader';

import 'antd/dist/antd.css';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector(state => state.auth);
  const routes = useRoutes(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(loadUser());
    } else {
      dispatch(getCurrentProfile());
    }
  }, [dispatch, isAuthenticated]);

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
};

export default App;
