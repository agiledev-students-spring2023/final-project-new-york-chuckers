import React from 'react';
import './TextCard.css';

function TextCard({ title, children, wrapped }) {
  return (
    <div className="text-card__wrapper">
      <div className="text-card__title">{title}</div>
      <div className={`text-card__content ${wrapped && 'wrapped'}`}>
        {children}
      </div>
    </div>
  );
}

export default TextCard;
