import React from 'react';
import { FreelancerSetup } from "../../components/freelancer/FreelancerSetup";
import { PageTitle } from '../../components/common/PageTitle';
import Logo from '../../components/common/Logo/Logo';
import './FreelancerSetupPage.css';

function FreelancerSetupPage() {
    return (
        <div className="setup-page__wraper">
            <Logo className="setup-page-logo" />
            <PageTitle>Freelancer Setup Profile</PageTitle>
            <FreelancerSetup />
        </div>
    )
}

export default FreelancerSetupPage;