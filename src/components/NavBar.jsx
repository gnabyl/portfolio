import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <div id="nav-bar">
        <Router>
        <div className="left">
            <Link className="nav-link left" to="/">
            Bang NGUYEN
            </Link>
        </div>
        <div className="right">
            <Link className="nav-link" to="/">
            About
            </Link>
            <Link className="nav-link" to="/">
            Projects
            </Link>
            <Link className="nav-link" to="/">
            Contacts
            </Link>
        </div>
        </Router>
    </div>
  );
};

export default NavBar;
