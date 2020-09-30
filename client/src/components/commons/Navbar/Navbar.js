﻿import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'store/auth/action';
import { LogoutOutlined, TeamOutlined } from '@ant-design/icons';

import './Navbar.scss';

const Navbar = ({ isAuthenticated }) => {
  const dispatch = useDispatch();
  const history = useHistory()

  const logout = () => {
    dispatch(logoutUser());
    history.push('/');
  };

  const navLinks = isAuthenticated && (
    <>
      <li>
        <Link to='/dashboard'>
          Dashboard
        </Link>
      </li>

      <li>
        <button className='navbar-logout' onClick={logout}>
          <LogoutOutlined className='user-outlined' />
          Logout
        </button>
      </li>
    </>
  );

  return (
    <header className='header bg-dark'>
      <h1>
        <Link to={isAuthenticated ? '/dashboard' : '/'}>
          <TeamOutlined />
          DevUnite
        </Link>
      </h1>
      <nav className="navbar">
        <ul>
          {navLinks}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
