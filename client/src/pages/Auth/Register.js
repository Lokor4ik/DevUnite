import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerUser } from 'store/auth/action';
import MainLayout from 'hoc/MainLayout';
import { message } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Register = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();

  useEffect(() => {
    if (Object.keys(errors).length) {
      message.error('All fields are required')
    }
  }, [errors]);

  const onSubmit = (data) => {
    if (data.password !== data.passwordDouble) {
      message.error('Passwords do not match');
    } else {
      dispatch(registerUser(data));
    }
  }

  return (
    <MainLayout sectionName='register'>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <UserOutlined className='user-outlined' />
        Create Your Account
      </p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            ref={register({ required: true })}
            size='large'
            type="text"
            placeholder="Name"
            name="name"
          />
        </div>
        <div className="form-group">
          <input
            ref={register({ required: true })}
            size='large'
            type="email"
            placeholder="Email Address"
            name="email"
          />
          <small className="form-text" >
            This site uses Gravatar so if you want a profile image, use a Gravatar email
          </small>
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
        <div className="form-group">
          <input
            ref={register({ required: true })}
            size='large'
            type="password"
            placeholder="Confirm Password"
            name="passwordDouble"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </MainLayout>
  );
}

export default Register;
