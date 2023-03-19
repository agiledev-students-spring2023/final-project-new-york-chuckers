import React from 'react';
import { Link } from 'react-router-dom';
import './UserLoginButton.css';

function UserLoginButton() {
  return (
    <div className="login-container">
      <Link to="/login" className="router-link">
        Login
      </Link>
    </div>
  );
}

export default UserLoginButton;
