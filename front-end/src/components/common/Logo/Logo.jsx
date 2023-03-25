import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Logo.png';
import './Logo.css';

function Logo() {
  return (
    <Link to="/">
      <div className="logo__wrapper">
        <img src={logo} />
      </div>
    </Link>
  );
}

export default Logo;
