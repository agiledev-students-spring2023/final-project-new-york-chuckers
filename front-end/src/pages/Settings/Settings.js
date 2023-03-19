import React, { useState } from 'react';
import profileImage from '../../Assets/logo.svg';
import './Settings.css';

function Settings() {
  const [name, setName] = useState("John Smith");
  const [email, setEmail] = useState("john.smith@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [industry, setIndustry] = useState("Technology");
  const [isEditable, setIsEditable] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  }

  const handleEdit = (event) => { 
    console.log("hi");
    const infoBox = event.target.parentElement;
    const editField = infoBox.querySelector(".edit-field");
    const saveButton = infoBox.querySelector(".save-button");

    if (!isEditable) {
      infoBox.classList.add("editable");
      editField.focus();
    } else {
      infoBox.classList.remove("editable");
    }

    setIsEditable(!isEditable);
  }

  const handleSave = (event) => { 
    const infoBox = event.target.parentElement;
    const infoValue = infoBox.querySelector(".info-value");
    const editField = infoBox.querySelector(".edit-field");

    infoValue.textContent = editField.value;
    infoBox.classList.remove("editable");
    setIsEditable(false);
  }

  return (
    <div className="settings-container">
      <div className="profile-container">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" width="200" height="200" />
          <div className="edit-profile-button">Edit</div>
        </div>
      </div>
      <div className="info-container">
        <div className="info-box">
          <div className="info-label">Name:</div>
          <div className="info-value">{name}</div>
          <div className="edit-button">Edit</div>
          <input type="text" className="edit-field" value={name} onChange={handleNameChange} />
          <div className="save-button">Save</div>
        </div>
        <div className="info-box">
          <div className="info-label">Email:</div>
          <div className="info-value">{email}</div>
          <div className="edit-button">Edit</div>
          <input type="text" className="edit-field" value={email} onChange={handleEmailChange} />
          <div className="save-button">Save</div>
        </div>
        <div className="info-box">
          <div className="info-label">Phone Number:</div>
          <div className="info-value">{phone}</div>
          <div className="edit-button">Edit</div>
          <input type="text" className="edit-field" value={phone} onChange={handlePhoneChange} />
          <div className="save-button">Save</div>
        </div>
        <div className="info-box">
          <div className="info-label">Industry Preferences:</div>
          <div className="info-value">{industry}</div>
          <div className="edit-button">Edit</div>
          <input type="text" className="edit-field" value={industry} onChange={handleIndustryChange} />
          <div className="save-button">Save</div>
        </div>
      </div>
    </div>
  );
}

export default Settings;