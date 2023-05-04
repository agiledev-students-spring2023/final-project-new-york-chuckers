import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profileImage from '../../Assets/logo.svg';
import { Header } from '../../components/common/Header';
import './Settings.css';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import { getLoginUserId, getLoginUserType } from '../../utils/parseToken';

function Settings() {
  const [dbID, setdbID] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [school, setSchool] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const loginUserId = getLoginUserId();
    setdbID(loginUserId);
    const userType = getLoginUserType();
    const capitalizedUserType = userType.charAt(0).toUpperCase() + userType.toLowerCase().slice(1);
    setPosition(capitalizedUserType);
  }, []);

  useEffect(() => {
    if (dbID) {
      fetchData();
    }
  }, [dbID]);
  //pull data from datbase
  const fetchData = () => {
    axios
      .get("https://chuckers-back-cd.onrender.com/settings/" + dbID)
      .then(response => {
        const name = response.data.profile.name;
        setName(name);
        const school = response.data.profile.school;
        setSchool(school);
      })
      .catch(err => {})
      .finally(() => {});
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('id');
    navigate('/');
  };

  return (
    <div>
      <Header />
      <div className="settings-container">
        <h1>Hello {name}!</h1>
        <div className="info-container">
          <div className="info-box">
            <div className="info-label">Edit {position} Profile</div>
            <Link to="/profile" className="link-out">
              Edit {position} Profile
            </Link>
          </div>
        </div>
        <div className="info-container">
          <div className="info-box">
            <div className="info-label">Logout</div>
            <button className="link-out" onClick={handleLogoutClick}>
              Click Here To Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
