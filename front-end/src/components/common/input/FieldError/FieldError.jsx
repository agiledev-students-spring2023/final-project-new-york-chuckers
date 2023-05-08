import React from 'react';
import './FieldError.css';

function FieldError({ children }) {
  return <div className="field-error__wrapper">{children}</div>;
}

export default FieldError;
