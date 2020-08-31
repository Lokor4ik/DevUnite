import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="/">
          <i class="fas fa-code"></i>
          DevUnite
        </a>
      </h1>

      <ul>
        <li><a href="/">Developers</a></li>
        <li><a href="/">Register</a></li>
        <li><a href="/">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
