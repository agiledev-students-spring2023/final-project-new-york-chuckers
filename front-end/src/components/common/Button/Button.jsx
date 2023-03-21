import React from 'react';
import './Button.css';

function Button({ children, onClick, ...others }) {
  return (
    <div className="button__wrapper" onClick={onClick} {...others}>
      {children}
    </div>
  );
}

export default Button;
