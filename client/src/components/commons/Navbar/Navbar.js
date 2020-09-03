import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
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
          <li><Link to='/'>Developers</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
