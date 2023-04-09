import React, { useState } from 'react';
import { Header } from '../../components/common/Header';
import { PositionList } from '../../components/position/PositionList';
import './SavedPositionListPage.css';

function SavedPositionListPage() {
  return (
    <div className="saved-position-list-page__wrapper">
      <Header />
      <PositionList />
    </div>
  );
}

export default SavedPositionListPage;
