import React from 'react';
import { NewPosition } from "../../components/position/NewPosition";
import { PageTitle } from '../../components/common/PageTitle';
import Logo from '../../components/common/Logo/Logo';
import './NewPositionPage.css';

function NewPositionPage() {
    return (
        <div className="setup-page__wraper">
            <Logo className="setup-page-logo" />
            <PageTitle>Create New Position</PageTitle>
            <NewPosition />
        </div>
    )
}

export default NewPositionPage;