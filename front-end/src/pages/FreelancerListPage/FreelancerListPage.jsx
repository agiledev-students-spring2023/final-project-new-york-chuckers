import React from 'react';
import { Header } from '../../components/common/Header';
import { FreelancerList } from '../../components/freelancer/FreelancerList';
import './FreelancerListPage.css';

function FreelancerListPage() {
  return (
    <div className="freelancer-list-page__wrapper">
      <Header />
      <FreelancerList />
    </div>
  );
}

export default FreelancerListPage;
