import React from 'react';
import { Header } from '../../components/common/Header';
import { PositionList } from '../../components/position/PositionList';
import './PositionListPage.css';

function PositionListPage() {
  return (
    <div className="position-list-page__wrapper">
      <Header />
      <PositionList />
    </div>
  );
}

export default PositionListPage;
