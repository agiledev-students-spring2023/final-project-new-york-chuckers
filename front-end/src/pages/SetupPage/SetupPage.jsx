import React from 'react';
import { Setup } from '../../components/account/Setup';
import { PageTitle } from '../../components/common/PageTitle';
import Logo from '../../components/common/Logo/Logo';
import './SetupPage.css';

function SetupPage() {
    return (
        <div className="setup-page__wraper">
            <Logo className="setup-page-logo" />
            <PageTitle>Profile Setup</PageTitle>
            <Setup />
        </div>
    )
}

export default SetupPage;