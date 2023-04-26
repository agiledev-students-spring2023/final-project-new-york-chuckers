import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profileImage from '../../Assets/logo.svg';
import { Header } from '../../components/common/Header';
import './Settings.css';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';

function Settings() {
  const [dbID, setdbID] = useState('643d8f6c7a4f59072949dfbc');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [skills, setSkills] = useState('');
  const [wantWork, setWantWork] = useState('');
  const [position, setPosition] = useState('A');
  const [isEditable, setIsEditable] = useState(false);
  const [isEditableCompany, setIsEditableCompany] = useState(false);
  const [selectedFile, setFileChange] = useState(null);
  const [notPosition, setNotPosition] = useState('');
  const [companies, setCompanies] = useState('');
  const [image, setImage] = useState(profileImage);

  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/settings/${dbID}`)
      .then(response => {
        const name = response.data.profile.name;
        setName(name);
        const email = response.data.profile.email;
        setEmail(email);
        const phone = response.data.profile.phone;
        setPhone(phone);
        const industry = response.data.profile.industry;
        setIndustry(industry);
        const position = response.data.profile.position;
        setPosition(position);
        const notPosition =
          position === 'Freelancer' ? 'Recruiter' : 'Freelancer';
        setNotPosition(notPosition);
        const companies = response.data.profile.companies;
        setCompanies(companies);
        const wantWork = response.data.profile.wantWork;
        setWantWork(wantWork);
        const skills = response.data.profile.skills;
        setSkills(skills);
        // setImage(image)
        console.log(position);
        console.log(notPosition);
      })
      .catch(err => {})
      .finally(() => {});
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('id');
    navigate('/');
  };

  // //for the switch button, find the opposite
  // const handleNameChange = event => {
  //   setName(event.target.value);
  // };

  // const handleEmailChange = event => {
  //   setEmail(event.target.value);
  // };

  // const handlePhoneChange = event => {
  //   setPhone(event.target.value);
  // };

  // const handleIndustryChange = event => {
  //   setIndustry(event.target.value);
  // };

  // const handleEdit = event => {
  //   const infoBox = event.target.parentElement;
  //   const editField = infoBox.querySelector('.edit-field');
  //   // const saveButton = infoBox.querySelector(".save-button");

  //   if (!isEditable) {
  //     infoBox.classList.add('editable');
  //     editField.focus();
  //   } else {
  //     infoBox.classList.remove('editable');
  //   }

  //   setIsEditable(!isEditable);
  // };

  // const handleSave = event => {
  //   const infoBox = event.target.parentElement;
  //   const infoValue = infoBox.querySelector('.info-value');
  //   const editField = infoBox.querySelector('.edit-field');

  //   infoValue.textContent = editField.value;
  //   infoBox.classList.remove('editable');
  //   setIsEditable(false);
  //   // Would push this out to a server to save
  //   console.log(name, email, phone, industry);
  // };

  // const handleEditCompany = event => {
  //   const infoBox = event.target.parentElement;
  //   if (!isEditableCompany) {
  //     infoBox.classList.add('cancel');
  //     const editButton = infoBox.querySelector('.edit-button');
  //     editButton.textContent = 'Cancel';
  //   } else {
  //     infoBox.classList.remove('cancel');
  //     const editButton = infoBox.querySelector('.edit-button');
  //     editButton.textContent = 'Edit';
  //   }

  //   setIsEditableCompany(!isEditableCompany);
  // };

  // const handleSaveCompany = event => {
  //   const infoBox = event.target.parentElement;
  //   const editButton = infoBox.querySelector('.edit-button');
  //   editButton.textContent = 'Edit';
  //   infoBox.classList.remove('cancel');
  //   setIsEditableCompany(false);
  // };

  // const handleProfileButtonClick = e => {
  //   alert(`You clicked the button to edit your profile. Upload Image!`);
  // };

  // //if recruiter, want to change industry interest to allow selecting company from a list of pre-made companies
  // //need to change the text, need to change the edit button to where its now an "Find your company" button
  // const switchPosition = () => {
  //   if (isEditable || isEditableCompany) {
  //     alert(`Please finish editing before switching profile type.`);
  //   } else {
  //     const newPosition =
  //       position === 'Freelancer' ? 'Recruiter' : 'Freelancer';
  //     setNotPosition(position);
  //     settingsUpdate(newPosition);
  //     setPosition(newPosition);
  //   }
  // };

  // const settingsUpdate = async newPosition => {
  //   await axios.post(
  //     `${process.env.REACT_APP_SERVER_HOSTNAME}/settings/save/${dbID}`,
  //     {
  //       name: name,
  //       email: email,
  //       phone: phone,
  //       industry: industry,
  //       position: newPosition,
  //       companies: companies,
  //       skills: skills,
  //       wantWork: wantWork,
  //     },
  //   );
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

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
