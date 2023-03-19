import React from 'react';
import { Logo } from '../../common/Logo';
import { SearchBar } from '../../common/SearchBar';
import UserMenu from '../../common/UserMenu/UserMenu';
import './Header.css';

function Header() {
  return (
    <div className="header__wrapper">
      <Logo />
      <SearchBar />
      <UserMenu />
    </div>
  );
}

export default Header;
