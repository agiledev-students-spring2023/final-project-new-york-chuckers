import React, { useState } from 'react';
import profileImage from '../../Assets/logo.svg';
import './Settings.css';

function Settings() {
  const [name, setName] = useState("John Smith");
  const [email, setEmail] = useState("john.smith@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [industry, setIndustry] = useState("Technology");
  const [position, setPosition] = useState("Freelancer");
//   const [positionWord, setPositionWord] = useState("Positions");
  const [isEditable, setIsEditable] = useState(false);
  const [isEditableCompany, setIsEditableCompany] = useState(false);
  const [selectedFile, setFileChange] = useState(null);
  const [notPosition,setNotPosition] = useState(position.localeCompare("Freelancer") == 0 ? "Recruiter" : "Freelancer");
  const [companies, setCompanies] = useState(["Amazon"])
  const [image, setImage] = useState(profileImage);

  //for the switch button, find the opposite
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

  const handleEditCompany = (event) => { 
    const infoBox = event.target.parentElement;
    if (!isEditableCompany) {
      infoBox.classList.add("cancel");
      const editButton = infoBox.querySelector(".edit-button");
      editButton.textContent = 'Cancel';
    } else {
      infoBox.classList.remove("cancel");
      const editButton = infoBox.querySelector(".edit-button");
      editButton.textContent = 'Edit';
    }

    setIsEditableCompany(!isEditableCompany);
  }

  const handleSaveCompany = (event) => { 
    const infoBox = event.target.parentElement;
    const editButton = infoBox.querySelector(".edit-button");
    editButton.textContent = 'Edit';
    infoBox.classList.remove("cancel");
    setIsEditableCompany(false);
  }

  const handleProfileButtonClick = e => {
    alert(`You clicked the button to edit your profile. Upload Image!`)
  }
  
  //if recruiter, want to change industry interest to allow selecting company from a list of pre-made companies
  //need to change the text, need to change the edit button to where its now an "Find your company" button
  const switchPosition = (event) =>{
    if(isEditable || isEditableCompany){
      alert(`Please finish editing before switching profile type.`)
    }else {
      setPosition(prevPosition => {
        const newPosition = prevPosition.localeCompare("Freelancer") == 0 ? "Recruiter" : "Freelancer";
        setNotPosition(prevPosition);
        return newPosition;
      });
    }
    console.log(position, notPosition);
  }

  return (
    <div className="settings-container">
        <h1>
            Hello {name}!
        </h1>
      <div className="info-container">
        <div className="info-box">
          <div className="info-label">Edit {position} Profile</div>
          <a href="/profile" className= "link-out">Edit {position} Profile</a>
        </div>
        </div>
        <div className="info-container">
        <div className="info-box">
          <div className="info-label">Saved Positions</div>
          <a href="/saved-positions" className= "link-out">Your Saved Positions</a>
        </div>
        </div>
        <div className="info-container">
        <div className="info-box">
          <div className="info-label">Switch to {notPosition}</div>
          <div className="link-out" onClick={switchPosition}>Switch</div>
        </div>
        </div>
        <div className="industry-container">
        <div className="info-container">
            <div className="info-box">
                <div className="info-label">Logout</div>
                <a href="/logout" className= "link-out">Click Here To Logout</a>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Settings;