import React from 'react';
import { SignIn } from '../../components/account/signin/SignIn';
import { PageTitle } from '../../components/common/PageTitle';
import './SignInPage.css';

function SignInPage() {
  return (
    <div className="sign-in-page__wrapper">
      <PageTitle>Sign In</PageTitle>
      <SignIn />
    </div>
  );
}

export default SignInPage;
