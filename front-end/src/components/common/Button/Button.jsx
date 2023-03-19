import React from 'react';
import './Button.css';

function Button({ children, onClick }) {
  return (
    <div className="button__wrapper" onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
