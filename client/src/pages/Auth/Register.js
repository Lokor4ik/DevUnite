import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../../store/auth/action';
import { message, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Register = ({ history }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordDouble: ''
  });

  const { name, email, password, passwordDouble } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordDouble) {
      message.error('Passwords do not match');
    } else {
      dispatch(registerUser({ name, email, password, history }));
    }
  }

  return (
    <div className="pages-wrapper">
      <section className="register">
        <div className="container">
          <h1 className="large text-primary">Sign Up</h1>
          <p className="lead">
            <UserOutlined className='user-outlined' />
            Create Your Account
            </p>
          <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
              <Input
                size='large'
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Input
                size='large'
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
              />
              <small className="form-text" >
                This site uses Gravatar so if you want a profile image, use a Gravatar email
          </small>
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
            <div className="form-group">
              <Input
                size='large'
                type="password"
                placeholder="Confirm Password"
                name="passwordDouble"
                value={passwordDouble}
                onChange={onChange}
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
          </form>
          <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default withRouter(Register);
