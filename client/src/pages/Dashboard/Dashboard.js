import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from 'store/profile/action';
import Loader from 'components/commons/Loader/Loader';
import MainLayout from 'hoc/MainLayout';
import { UserOutlined } from '@ant-design/icons';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector(state => state.profileUser);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

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
        profile
          ? `has profile`
          : (
            <>
              <p>You haven't yet setup a profile, please add some info.</p>
              <Link to='/create-profile' className='btn btn-primary my-1'>
                Create profile
                  </Link>
            </>
          )
      }
    </MainLayout>
  );
}

export default Dashboard;
