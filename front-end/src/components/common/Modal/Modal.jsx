import React from 'react';
import { Button } from '../Button';
import './Modal.css';

function Modal({ title, subtitle, children, onClose }) {
  return (
    <div className="modal__wrapper">
      <div className="modal__inner-wrapper">
        <div>
          <div className="modal__title">{title}</div>
          <div className="modal__subtitle">{subtitle}</div>
        </div>
        <div className="modal__content">{children}</div>
        <div className="modal__button">
          <Button
            style={{ height: '44px', fontSize: '22px' }}
            onClick={onClose}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
