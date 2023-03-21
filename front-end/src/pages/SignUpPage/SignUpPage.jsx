import React from 'react';
import { SignUp } from '../../components/account/signup/SignUp';
import { PageTitle } from '../../components/common/PageTitle';
import './SignUpPage.css';

function SignUpPage() {
  return (
    <div className="sign-up-page__wrapper">
      <PageTitle>Sign Up</PageTitle>
      <SignUp />
    </div>
  );
}

export default SignUpPage;
