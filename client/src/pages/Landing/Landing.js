import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './Landing.scss';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Unite</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to='/register'>
              <Button type="primary" size='large'>Sign Up</Button>
            </Link>
            <Link to='/login'>
              <Button size='large'>Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
