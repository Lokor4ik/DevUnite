import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from 'store/profile/action';
import { useEffect } from 'react';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

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
