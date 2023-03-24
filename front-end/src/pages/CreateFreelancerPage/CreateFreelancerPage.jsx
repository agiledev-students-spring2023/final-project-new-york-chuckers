import React from 'react';
import { CreateFreelancer } from "../../components/freelancer/CreateFreelancer";
import { PageTitle } from '../../components/common/PageTitle';
import Logo from '../../components/common/Logo/Logo';
import './CreateFreelancerPage.css';

function CreateFreelancerPage() {
    return (
        <div className="setup-page__wraper">
            <Logo className="setup-page-logo" />
            <PageTitle>Create Freelancer Profile</PageTitle>
            <CreateFreelancer />
        </div>
    )
}

export default CreateFreelancerPage;