import React from 'react';
import { PageTitle } from '../../components/common/PageTitle';
import Logo from '../../components/common/Logo/Logo';
import './FreelancerUpdatePage.css';
import { FreelancerUpdate } from '../../components/freelancer/FreelancerUpdate';

function FreelancerUpdatePage() {
  return (
    <div className="setup-page__wraper">
      <Logo className="setup-page-logo" />
      <PageTitle>Freelancer Edit Profile</PageTitle>
      <FreelancerUpdate />
    </div>
  );
}

export default FreelancerUpdatePage;
