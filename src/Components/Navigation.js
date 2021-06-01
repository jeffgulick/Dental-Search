import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-links'>
          <NavLink
            to='/'
            className='nav-link'
            exact
            activeClassName='active-link'
          >
            home
          </NavLink>
          <NavLink
            to='/search'
            className='nav-link'
            activeClassName='active-link'
          >
            Search
          </NavLink>
          <NavLink
            to='/Providers'
            className='nav-link'
            activeClassName='active-link'
          >
            Providers
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
