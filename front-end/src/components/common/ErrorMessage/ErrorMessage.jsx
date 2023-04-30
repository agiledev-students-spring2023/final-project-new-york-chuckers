import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ children }) {
  return <div className="error-message__wrapper">{children}</div>;
}

export default ErrorMessage;
