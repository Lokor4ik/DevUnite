import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from 'store/profile/action';
import { useEffect } from 'react';
import Loader from 'components/commons/Loader/Loader';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector(state => state.profileUser);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  /*  if (loading || !profile) {
     return <Loader />
   } */

  return (
    <div className="pages-wrapper">
      <section className="dashboard">
        <div className="container">
          fdsfs
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
