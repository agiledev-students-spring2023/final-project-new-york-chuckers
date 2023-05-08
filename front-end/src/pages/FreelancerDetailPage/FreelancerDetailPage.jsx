import React from 'react';
import { useParams } from 'react-router-dom';
import { PageTitle } from '../../components/common/PageTitle';
import { FreelancerDetail } from '../../components/freelancer/FreelancerDetail';
import './FreelancerDetailPage.css';

function FreelancerDetailPage() {
  const { id } = useParams();
  return (
    <div className="freelancer-detail-page__wrapper">
      <PageTitle>Freelancer Profile</PageTitle>
      <FreelancerDetail id={parseInt(id)} />
    </div>
  );
}

export default FreelancerDetailPage;
