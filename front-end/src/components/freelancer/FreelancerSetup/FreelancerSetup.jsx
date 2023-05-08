import axios from 'axios';
import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputTitle } from '../../common/input/InputTitle';
import './FreelancerSetup.css';

function FreelancerSetup() {
  const [status, setStatus] = useState({});
  const navigate = useNavigate();

  let isPhoto = false;

  const handleSubmit = async e => {
    e.preventDefault();

    const info = {
      name: e.target.name.value,
      age: e.target.age.value,
      school: e.target.school.value,
      role: e.target.role.value,
      pay: e.target.pay.value,
      experiences: e.target.experiences.value,
      projects: e.target.projects.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      photo: isPhoto,
    };

    const userId = localStorage.getItem('signup_userid');

    const response = await axios.post(
      window.backend + '/user/' + userId + '/freelancer-setup',
      info,
    );

    navigate('/signin');
  };

  function handlePhotoClick() {
    isPhoto = true;
    alert('You are Uploading a new Photo');
  }

  return (
    <div className="new-post__wrapper">
      <form onSubmit={handleSubmit}>
        <div className="item__wrapper">
          <InputTitle>Name:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="name" placeholder="Harry Potter" />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Age:</InputTitle>
          <div className="text-field__wrapper">
            <input type="number" name="age" placeholder="21" />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>School:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="school" placeholder="Hogwarts" />
          </div>
        </div>
        {/* <div className="item__wrapper">
          <div className="add-photo" onClick={handlePhotoClick}>
            Add Photo
          </div>
        </div> */}
        <div className="item__wrapper">
          <InputTitle>Specialty Role:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="role" placeholder="Auror" />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Desired Pay:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="number"
              min="0.01"
              step="0.01"
              name="pay"
              placeholder="10"
            />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Experiences and Introduction:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="text"
              name="experiences"
              placeholder="Defeated Voldemort, I use glasses and my favorite spell is Expelliarmus"
            />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Past Projects:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="url"
              name="projects"
              placeholder="Link to Portfolio/Github/etc."
            />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Email:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="email"
              name="email"
              placeholder="harry.potter@hogwarts.edu"
            />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Phone:</InputTitle>
          <div className="text-field__wrapper">
            <input type="tel" name="phone" placeholder="222-222-2222" />
          </div>
        </div>
        <input className="submit-btn" type="submit" value="Post" />
      </form>
      <div className="cancel-btn">
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
}

export default FreelancerSetup;
