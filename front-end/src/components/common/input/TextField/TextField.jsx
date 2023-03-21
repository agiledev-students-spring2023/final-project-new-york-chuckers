import React from 'react';
import { FieldError } from '../FieldError';
import './TextField.css';

function TextField({ error, ...others }) {
  return (
    <div className={`text-field__wrapper ${error && 'error'}`}>
      <input type="text" {...others} />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

export default TextField;
