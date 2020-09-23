import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from 'store/auth/action';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData.email, formData.password));
  }

  return (
    <div className="pages-wrapper">
      <section className="login">
        <div className="container">
          <h1 className="large text-primary">Sign In</h1>
          <p className="lead">
            <UserOutlined className='user-outlined' />
            Sign Into Your Account
            </p>
          <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
              <Input
                size='large'
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Input
                size='large'
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={onChange}
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
          </form>
          <p className="my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
