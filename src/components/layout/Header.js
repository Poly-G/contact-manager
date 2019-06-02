import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">
                Contact Manager
            </a>
            <div>
                <ul className="navbar-nav mr-auto">
                      <li className="nav-item row">
                        <Link to="/" className="nav-link">
                        <i className="fas fa-home"></i> Home
                        </Link>
                        <Link to="/contact/add" className="nav-link">
                        <i className="fas fa-plus"></i> Add
                        </Link>
                        <Link to="/about" className="nav-link">
                        <i className="fas fa-question"></i> About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header

// Header.propTypes = {

// }