import React from 'react';
import './SaveButton.css';

function SaveButton({ children, onClick, ...others }) {
  return (
    <div className="save-button__wrapper" onClick={onClick} {...others}>
      {children}
    </div>
  );
}

export default SaveButton;
