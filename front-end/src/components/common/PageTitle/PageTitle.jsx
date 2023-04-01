import React from 'react';
import './PageTitle.css';
import { BiArrowBack } from 'react-icons/bi';
import { useGoPrevPage } from '../../../hooks/useGoPrevPage';

function PageTitle({ children }) {
  const [goPrevPage] = useGoPrevPage();
  return (
    <div className="page-title__wrapper">
      <div className="page-title__prev-btn" onClick={goPrevPage}>
        <BiArrowBack />
      </div>
      {children}
    </div>
  );
}

export default PageTitle;
