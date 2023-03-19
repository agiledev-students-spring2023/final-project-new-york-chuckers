import React from 'react';
import logo from '../../../assets/Logo.png';
import './Logo.css';

function Logo() {
  return (
    <div className="logo__wrapper">
      <img src={logo} />
    </div>
  );
}

export default Logo;
