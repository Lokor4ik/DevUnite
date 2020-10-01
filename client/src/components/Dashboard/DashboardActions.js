import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
/* import Loader from 'components/commons/Loader/Loader';
import MainLayout from 'hoc/MainLayout'; */

const DashboardActions = () => {
  const dispatch = useDispatch();
  /*   const { profile, loading } = useSelector(state => state.profileUser); */

  useEffect(() => {
    /*     dispatch(getCurrentProfile()); */
  }, [dispatch]);

  /*   if (loading) {
      return <Loader />
    } */

  return (
    <div className="dash-buttons">
      <Link to='/profile' className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i>
        Edit Profile
      </Link>
      <Link to='/add-experience' className="btn btn-light">
        <i className="fab fa-black-tie text-primary"></i>
        Add Experience
      </Link>
      <Link to='/add-education' className="btn btn-light">
        <i className="fas fa-graduation-cap text-primary"></i>
        Add Education
      </Link>
    </div>
  );
}

export default DashboardActions;
