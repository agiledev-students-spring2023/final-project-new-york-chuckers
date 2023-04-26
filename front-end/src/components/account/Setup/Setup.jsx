import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../../../api/user';
//import { Navigate } from 'react-router-dom';
import { InputTitle } from '../../common/input/InputTitle';
//I set up a
import './Setup.css';

function Setup() {
  const [gender, setGender] = useState({ male: '', female: '', sel: '' });
  const [role, setRole] = useState({ recruiter: '', freelancer: '', sel: '' });

  const navigate = useNavigate();

  const signUp = async data => {
    const responseData = await userApi.signUp(data);
    return responseData._id;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const signupInfo = JSON.parse(localStorage.getItem('signup_info'));

    const info = {
      name: e.target.name.value,
      gender: gender.sel,
      dateOfBirth: e.target.birthday.value,
      school: e.target.school.value,
      ...signupInfo,
    };

    try {
      const id = await signUp(info);
      if (role.sel === 'freelancer') {
        localStorage.setItem('signup_userid', id);
        navigate('/freelancer-setup');
      } else {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  function maleGenderClick() {
    setGender({ male: 'S', female: '', sel: 'male' });
  }
  function femaleGenderClick() {
    setGender({ male: '', female: 'S', sel: 'female' });
  }

  function recruiterClick() {
    setRole({ recruiter: 'S', freelancer: '', sel: 'recruiter' });
  }
  function freelancerClick() {
    setRole({ recruiter: '', freelancer: 'S', sel: 'freelancer' });
  }

  return (
    <div className="setup__wrapper">
      <form onSubmit={handleSubmit}>
        <div className="item__wrapper">
          <InputTitle>Name:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="name" placeholder="Harry Potter" />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Gender:</InputTitle>
          <div className="selection-buttons">
            <div className="button__padding">
              <button
                type="button"
                className={'selection-btn-ind' + gender.male}
                onClick={maleGenderClick}
              >
                Male
              </button>
            </div>
            <button
              type="button"
              className={'selection-btn-ind' + gender.female}
              onClick={femaleGenderClick}
            >
              Female
            </button>
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Date of Birth:</InputTitle>
          <div className="text-field__wrapper">
            <input type="date" name="birthday" />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>School:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="school" placeholder="Hogwarts" />
          </div>
        </div>
        <div className="item_wrapper">
          <div className="selection-buttons">
            <div className="button__padding">
              <button
                type="button"
                className={'selection-btn-ind' + role.recruiter}
                onClick={recruiterClick}
              >
                I'm a Recruiter
              </button>
            </div>
            <button
              type="button"
              className={'selection-btn-ind' + role.freelancer}
              onClick={freelancerClick}
            >
              I'm a Freelancer
            </button>
          </div>
        </div>
        <input className="submit-btn" type="submit" value="Save" />
      </form>
    </div>
  );
}

export default Setup;
