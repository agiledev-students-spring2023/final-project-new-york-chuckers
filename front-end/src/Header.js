import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/Logo.png';
import './Header.css';

function Header() {
  return (
    <div className="header-bar">
      <div className="logo-container">
        <img src={logo} alt="Tester Logo" className="logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="login-container">
        <Link to="/login" className="router-link">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
