import axios from 'axios';
import { useEffect } from 'react';
import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getLoginUserId } from '../../../utils/parseToken';
import { InputTitle } from '../../common/input/InputTitle';
import './FreelancerUpdate.css';

function FreelancerUpdate() {
  const [status, setStatus] = useState({
    name: '',
    age: '',
    school: '',
    role: '',
    pay: '',
    experiences: '',
    projects: '',
    email: '',
    phone: '',
    // photo: '',
  });

  const { name, age, school, role, pay, experiences, projects, email, phone } =
    status;

  const navigate = useNavigate();

  const onStatusChange = e => {
    const { name, value } = e.target;
    setStatus({
      ...status,
      [name]: value,
    });
  };

  let isPhoto = false;

  const handleSubmit = async e => {
    e.preventDefault();

    const userId = getLoginUserId();

    const response = await axios.put(
      window.backend + '/user/' + userId + '/freelancer-setup',
      status,
    );

    navigate('/profile');
  };

  function handlePhotoClick() {
    isPhoto = true;
    alert('You are Uploading a new Photo');
  }

  useEffect(() => {
    const fetchFreelancerSetup = async () => {
      const userId = getLoginUserId();
      const {
        data: { profile },
      } = await axios.get(
        window.backend + '/user/' + userId + '/freelancer-setup',
      );

      setStatus(profile);
    };

    fetchFreelancerSetup();
  }, []);

  return (
    <div className="new-post__wrapper">
      <form onSubmit={handleSubmit}>
        <div className="item__wrapper">
          <InputTitle>Name:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="text"
              name="name"
              placeholder="Harry Potter"
              value={name}
              onChange={onStatusChange}
            />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Age:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="number"
              name="age"
              placeholder="21"
              value={age}
              onChange={onStatusChange}
            />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>School:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="text"
              name="school"
              placeholder="Hogwarts"
              value={school}
              onChange={onStatusChange}
            />
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
            <input
              type="text"
              name="role"
              placeholder="Auror"
              value={role}
              onChange={onStatusChange}
            />
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
              value={pay}
              onChange={onStatusChange}
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
              value={experiences}
              onChange={onStatusChange}
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
              value={projects}
              onChange={onStatusChange}
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
              value={email}
              onChange={onStatusChange}
            />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Phone:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="tel"
              name="phone"
              placeholder="222-222-2222"
              value={phone}
              onChange={onStatusChange}
            />
          </div>
        </div>
        <input className="submit-btn" type="submit" value="Post" />
      </form>
      <div className="cancel-btn">
        <Link to="/profile">Cancel</Link>
      </div>
    </div>
  );
}

export default FreelancerUpdate;
