import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../../../api/user';
import Button from '../../../common/Button/Button';
import { InputTitle } from '../../../common/input/InputTitle';
import { TextField } from '../../../common/input/TextField';
import Logo from '../../../common/Logo/Logo';
import './SignUp.css';

function SignUp() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const { email, password, confirmPassword } = inputs;

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //Adding useNavigate const to link signup to profile setup (Joey)
  const navigate = useNavigate();
  //Adding a handleSignup function to link to profile setup, edit it as you please (Joey)

  function handleSignup() {
    localStorage.setItem('signup_info', JSON.stringify(inputs));
    navigate('/setup');
  }

  const validatePassword = () => {
    if (password === confirmPassword) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('Password does not match');
    }
  };

  return (
    <div className="sign-up__wrapper">
      <div className="sign-up__logo">
        <Logo />
      </div>
      <div className="sign-up__input-wrapper">
        <div>
          <InputTitle>Email</InputTitle>
          <TextField onChange={handleChange} name="email" value={email} />
        </div>
        <div>
          <InputTitle>Password</InputTitle>
          <TextField
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div>
          <InputTitle>Confirm Password</InputTitle>
          <TextField
            type="password"
            onChange={handleChange}
            onBlur={validatePassword}
            name="confirmPassword"
            value={confirmPassword}
            error={confirmPasswordError}
          />
        </div>
      </div>
      <div className="sign-up__signup-link">
        Already have an account? <Link to="/signin">Log in</Link> here.
      </div>
      <div className="sign-up__submit-btn">
        {
          // added handleSignup to onClick for the button (Joey)
        }
        <Button onClick={handleSignup}>Sign Up</Button>
      </div>
    </div>
  );
}

export default SignUp;
