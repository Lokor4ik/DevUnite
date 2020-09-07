import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'store/auth/action';

import './Navbar.scss';

const Navbar = ({ isAuthenticated }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  const navLinks = isAuthenticated ?
    <>
      <li><Link to='/'>Developers</Link></li>
      <li><button className='navbar-logout' onClick={logout}>Logout</button></li>
    </> :
    <>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </>;

  return (
    <header className='header bg-dark'>
      <h1>
        <Link to="/">
          <i class="fas fa-code"></i>
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
