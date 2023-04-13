import React from 'react';
import { useLoginCheck } from '../../../hooks/useLoginCheck';
import Logo from '../Logo/Logo';
import { UserLoginButton } from '../UserLoginButton';
import './Header.css';

function Header() {
  const [isLogined] = useLoginCheck();

  return (
    <div className="header-bar">
      <Logo />
      {!isLogined && <UserLoginButton />}
    </div>
  );
}

export default Header;
