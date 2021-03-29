import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import '../css/NavBar.css';


const NavBar = () => {
    return (
        <div className="nav-bar">
            <Router>
                <Link className='nav-link' to='/'>
                Home
                </Link>
                <Link className='nav-link' to='/'>
                About
                </Link>
                <Link className='nav-link' to='/'>
                Projects
                </Link>
                <Link className='nav-link' to='/'>
                Contacts
                </Link>
            </Router>
        </div>
    );
};

export default NavBar;
