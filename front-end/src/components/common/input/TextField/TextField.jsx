import React from 'react';
import { FieldError } from '../FieldError';
import './TextField.css';

function TextField({ value, onChange, name, error }) {
  return (
    <div className="text-field__wrapper">
      <input type="text" value={value} onChange={onChange} name={name} />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

export default TextField;
