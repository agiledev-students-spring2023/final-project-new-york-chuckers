import React from 'react';
import { Header } from '../../components/common/Header';
import { FreelancerList } from '../../components/freelancer/FreelancerList';
import './SavedFreelancerListPage.css';

function SavedFreelancerListPage() {
  return (
    <div className="saved-freelancer-list-page__wrapper">
      <Header />
      <FreelancerList />
    </div>
  );
}

export default SavedFreelancerListPage;
