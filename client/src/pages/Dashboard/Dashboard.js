import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from 'components/commons/Loader/Loader';
import MainLayout from 'hoc/MainLayout';
import DashboardActions from 'components/Dashboard/DashboardActions';
import { UserOutlined } from '@ant-design/icons';

const Dashboard = () => {
  const { hasProfile, loading } = useSelector(state => state.profileUser);
  const { user } = useSelector(state => state.auth);

  if (loading) {
    return <Loader />
  }

  return (
    <MainLayout sectionName='dashboard'>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <UserOutlined className='user-outlined' />
          Welcome {user && user.name}
      </p>
      {
        hasProfile
          ? <DashboardActions />
          : (
            <>
              <p>You haven't yet setup a profile, please add some info.</p>
              <Link to='/profile' className='btn btn-primary my-1'>
                Create profile
              </Link>
            </>
          )
      }
    </MainLayout>
  );
}

export default Dashboard;
