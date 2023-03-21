import React, { useState } from 'react';
import profileImage from '../../Assets/logo.svg';
import './Settings.css';

function Settings() {
  const [name, setName] = useState("John Smith");
  const [email, setEmail] = useState("john.smith@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [industry, setIndustry] = useState("Technology");
  const [isEditable, setIsEditable] = useState(false);
  const [selectedFile, setFileChange] = useState(null);

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
    const infoBox = event.target.parentElement;
    const editField = infoBox.querySelector(".edit-field");
    // const saveButton = infoBox.querySelector(".save-button");

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
    // Would push this out to a server to save
    console.log(name, email, phone, industry);
  }

  const handleProfileButtonClick = e => {
    // placeholder... do something more interesting
    alert(`You clicked the button to edit your profile. Upload Image!`)
  }
   
  
  return (
    <div className="settings-container">
      <div className="profile-container">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" width="200" height="200" />
          <div className="edit-profile-button"onClick={handleProfileButtonClick}>Edit</div>
        </div>
      </div>
      {/* Want to add a switch from freelancer to recruiter double it for free-lancer if recruiter, im affiliated with this and make an edit company button*/}
      <div className="info-container">
        <div className="info-box">
          <div className="info-label">Name:</div>
          <div className="info-value">{name}</div>
          <div className="edit-button" onClick={handleEdit}>Edit</div>
          <input type="text" className="edit-field" value={name} onChange={handleNameChange} />
          <div className="save-button" onClick={handleSave}>Save</div>
        </div>
        <div className="info-box">
          <div className="info-label">Email:</div>
          <div className="info-value">{email}</div>
          <div className="edit-button" onClick={handleEdit}>Edit</div>
          <input type="text" className="edit-field" value={email} onChange={handleEmailChange} />
          <div className="save-button" onClick={handleSave}>Save</div>
        </div>
        <div className="info-box">
          <div className="info-label">Phone Number:</div>
          <div className="info-value">{phone}</div>
          <div className="edit-button" onClick={handleEdit}>Edit</div>
          <input type="text" className="edit-field" value={phone} onChange={handlePhoneChange} />
          <div className="save-button" onClick={handleSave}>Save</div>
        </div>
        <div className="info-box">
          <div className="info-label">Industry Preferences:</div>
          <div className="info-value">{industry}</div>
          <div className="edit-button" onClick={handleEdit}>Edit</div>
          <input type="text" className="edit-field" value={industry} onChange={handleIndustryChange} />
          <div className="save-button" onClick={handleSave}>Save</div>
        </div>
      </div>
    </div>
  );
}

export default Settings;