import React from 'react';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import { UserLoginButton } from '../UserLoginButton';
import './Header.css';

function Header() {
  return (
    <div className="header-bar">
      <Logo />
      <SearchBar />
      <UserLoginButton />
    </div>
  );
}

export default Header;
