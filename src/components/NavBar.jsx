import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import '../css/NavBar.css';

const navItems = [
  {
    text: 'About',
    link: '/about'
  },
  {
    text: 'Projects',
    link: ''
  },
  {
    text: 'Contacts',
    link: '/contacts'
  }
];


const NavBar = () => {

  const [menuToggle, setMenuToggle] = useState()

  const toggleMenu = () => {
    setMenuToggle(menuToggle => !menuToggle);
  }
  return (
    <nav>
      <a href='/' className='navbar-logo'>Bang NGUYEN</a>
      <div className='navbar-menu-open' onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={menuToggle ? 'navbar-menu active' : 'navbar-menu'}>
        <div className='navbar-menu-close' onClick={toggleMenu}>
          <FaTimes />
        </div>
        <div className='profile-image' />
        <Router>
          {navItems.map((item, idx) => {
            return (
              <Link className='navbar-links' key={idx} to={item.link}>
                {item.text}
              </Link>
            );
          })}
        </Router>
      </div>
    </nav>
  );

};

export default NavBar;
