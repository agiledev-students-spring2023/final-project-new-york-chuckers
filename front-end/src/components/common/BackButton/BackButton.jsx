import React from 'react';
import { useGoPrevPage } from '../../../hooks/useGoPrevPage';
import { BiArrowBack } from 'react-icons/bi';

function BackButton({ size = 'medium' }) {
  const [goPrevPage] = useGoPrevPage();
  return (
    <div
      className={`back-button_wrapper back-button__${size}`}
      onClick={goPrevPage}
    >
      <BiArrowBack />
    </div>
  );
}

export default BackButton;
