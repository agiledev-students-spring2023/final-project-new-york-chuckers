import React from 'react';
import Logo from '../Logo/Logo';
import { UserLoginButton } from '../UserLoginButton';
import './Header.css';

function Header() {
  return (
    <div className="header-bar">
      <Logo />
      <UserLoginButton />
    </div>
  );
}

export default Header;
