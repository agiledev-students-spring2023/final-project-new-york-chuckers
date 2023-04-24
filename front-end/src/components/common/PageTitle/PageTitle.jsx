import React from 'react';
import './PageTitle.css';
import BackButton from '../BackButton/BackButton';

function PageTitle({ children }) {
  return (
    <div className="page-title__wrapper">
      <div className="page-title__prev-btn">
        <BackButton />
      </div>
      {children}
    </div>
  );
}

export default PageTitle;
