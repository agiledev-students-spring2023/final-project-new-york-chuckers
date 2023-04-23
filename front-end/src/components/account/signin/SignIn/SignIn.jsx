import React from 'react';
import { Link, useFormAction, useNavigate } from 'react-router-dom';
import { userApi } from '../../../../api/user';
import Button from '../../../common/Button/Button';
import { InputTitle } from '../../../common/input/InputTitle';
import { TextField } from '../../../common/input/TextField';
import Logo from '../../../common/Logo/Logo';
import './SignIn.css';
import { useState } from 'react';

function SignIn() {
  //Set up navigate const
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;

  const onInputChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //Handle sign in button click, navigate to home page
  async function signIn(data) {
    const responseData = await userApi.signIn(data);

    return responseData.token;
  }

  async function handleSignIn() {
    try {
      const token = await signIn(inputs);
      localStorage.setItem('id', token);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="sign-in__wrapper">
      <div className="sign-in__logo">
        <Logo />
      </div>
      <div className="sign-in__input-wrapper">
        <div>
          <InputTitle>Email</InputTitle>
          <TextField onChange={onInputChange} name="email" value={email} />
        </div>
        <div>
          <InputTitle>Password</InputTitle>
          <TextField
            type="password"
            onChange={onInputChange}
            name="password"
            value={password}
          />
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
