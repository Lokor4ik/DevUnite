import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../../store/auth/action';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  /* const { isAuthenticated } = useSelector((state) => state.auth); */

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
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
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Input
                size='large'
                type="password"
                placeholder="Password"
                name="password"
                value={password}
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

export default withRouter(Login);
