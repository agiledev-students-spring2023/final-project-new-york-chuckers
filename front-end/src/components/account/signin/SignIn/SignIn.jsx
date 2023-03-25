import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../common/Button/Button';
import { InputTitle } from '../../../common/input/InputTitle';
import { TextField } from '../../../common/input/TextField';
import Logo from '../../../common/Logo/Logo';
import './SignIn.css';




function SignIn() {

  //Set up navigate const
  const navigate = useNavigate();

  //Handle sign in button click, navigate to home page
  function handleSignIn(){
    navigate("/");
  }

  return (
    <div className="sign-in__wrapper">
      <div className="sign-in__logo">
        <Logo />
      </div>
      <div className="sign-in__input-wrapper">
        <div>
          <InputTitle>Email</InputTitle>
          <TextField />
        </div>
        <div>
          <InputTitle>Password</InputTitle>
          <TextField type="password" />
        </div>
      </div>
      <div className="sign-in__signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link> here.
      </div>
      <div className="sign-in__submit-btn">
        <Button onClick={handleSignIn}>Sign In</Button>
      </div>
    </div>
  );
}

export default SignIn;
