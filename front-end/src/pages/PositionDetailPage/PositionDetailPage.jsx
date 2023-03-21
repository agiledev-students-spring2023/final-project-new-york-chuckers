import React from 'react';
import { useParams } from 'react-router-dom';
import { PageTitle } from '../../components/common/PageTitle';
import { PositionDetail } from '../../components/position/PositionDetail';
import './PositionDetailPage.css';

function PositionDetailPage() {
  const { id } = useParams();
  return (
    <div className="position-detail-page__wrapper">
      <PageTitle>Position Information</PageTitle>
      <PositionDetail id={parseInt(id)} />
    </div>
  );
}

export default PositionDetailPage;
