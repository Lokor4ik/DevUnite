import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginUser } from 'store/auth/action';
import MainLayout from 'hoc/MainLayout';
import { message } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const Login = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();

  useEffect(() => {
    if (Object.keys(errors).length) {
      message.error('All fields are required')
    }
  }, [errors]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  }

  return (
    <MainLayout sectionName='login'>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <UserOutlined className='user-outlined' />
        Sign Into Your Account
      </p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            ref={register({ required: true })}
            size='large'
            type="email"
            placeholder="Email Address"
            name="email"
          />
        </div>
        <div className="form-group">
          <input
            ref={register({ required: true })}
            size='large'
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </MainLayout>
  );
}

export default Login;
