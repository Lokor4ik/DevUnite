import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../store/alert/action';
import MainLayout from '../../hoc/MainLayout';

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordDouble: ''
  });
  /* 
  const newUser = {
          name,
          email,
          password
        };
  
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
  
          const body = JSON.stringify(newUser);
  
          const res = await axios.post('/api/users', body, config);
          console.log(res.data);
        } catch (error) {
          console.error(error.response.data);
        }
  */
  const { name, email, password, passwordDouble } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordDouble) {
      dispatch(setAlert('Passwords do not match', 'danger'));
    } else {
      console.log('SUCCESS');
    }
  }

  return (
    <MainLayout>
      <div className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <small className="form-text" >
              This site uses Gravatar so if you want a profile image, use a Gravatar email
          </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="6"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordDouble"
              value={passwordDouble}
              onChange={onChange}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </MainLayout>
  );
}

export default Register;
