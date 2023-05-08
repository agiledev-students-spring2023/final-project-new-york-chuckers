import React from 'react';
import './IconText.css';
import { Link } from 'react-router-dom';

function IconText({ icon, text, to }) {
  return (
    <Link to={to}>
      <div className="icon-text__wrapper">
        <div className="icon-text__icon">{icon}</div>
        <div className="icon-text__text">{text}</div>
      </div>
    </Link>
  );
}

export default IconText;
