import React, { useState } from 'react';
import profileImage from '../../Assets/logo.svg';
import './Profile.css';

function Profile() {
  const [name, setName] = useState("John Smith");
  const [email, setEmail] = useState("john.smith@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [industry, setIndustry] = useState("Technology");
  const [skills, setSkills] = useState("Python, Javscript, Figma");
  const [wantWork, setWantWork] = useState("Yes");
  const [position, setPosition] = useState("Freelancer");
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

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
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

  const switchWantWork = (event) =>{
    setWantWork(prevVal => {
      const newVal = prevVal.localeCompare("Yes") == 0 ? "No" : "Yes";
      return newVal;
    });
  }

  function FileInput(props) {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
  
      if (selectedFile && (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png')) {
        setFile(selectedFile);
  
        const reader = new FileReader();
        reader.onload = () => {
          const newImage = reader.result;
          props.onChange(newImage);
        };
        reader.readAsDataURL(selectedFile);
      }
    };
  
    return (
      <div>
        <input type="file" accept=".jpg,.jpeg,.png" onChange={handleFileChange} />
      </div>
    );
  }
  
  function ImageDisplay(props) {
    return (
      <div>
        <img src={props.image} alt="Current image" />
      </div>
    );
  }

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  return (
    <div className="settings-container">
      <div className="profile-container">
        <div className="profile-image">
          <img src={image} alt="Profile" width="200" height="200"/>
          {/* <FileInput onChange={handleImageChange} className="file-input"/> */}
          <div className="edit-profile-button"onClick={handleProfileButtonClick}>Edit</div>
        </div>
      </div>
      <h1>
        Your {position} Profile
      </h1>
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
      <div className="industry-container">
          {position === 'Recruiter' ? (
            <div className="info-box">
              <div className="info-label">Your Company:</div>
              <div className="info-value">{companies}</div>
              <div className="edit-button" onClick={handleEditCompany}>Edit</div>
              <a href="/companies-list" className= "save-button">Find Another Company</a>
            </div>
          ) : (
            <div className="info-box"> 
              <div className="info-label">Industry Preferences:</div>
              <div className="info-value">{industry}</div>
              <div className="edit-button" onClick={handleEdit}>Edit</div>
              <input type="text" className="edit-field" value={industry} onChange={handleIndustryChange}/>
              <div className="save-button" onClick={handleSave}>Save</div>
            </div>
          )}
      </div>
      <div className="industry-container">
        {position === 'Freelancer' ? (            
        <div className="info-box"> 
          <div className="info-label">Skills:</div>
          <div className="info-value">{skills}</div>
          <div className="edit-button" onClick={handleEdit}>Edit</div>
          <input type="text" className="edit-field" value={skills} onChange={handleSkillsChange}/>
          <div className="save-button" onClick={handleSave}>Save</div>
        </div>) : null}
      </div>
      <div className="industry-container">
        {position === 'Freelancer' ? (            
        <div className="info-box"> 
          <div className="info-label">Looking for Work</div>
          <div className="info-value">{wantWork}</div>
          <div className="edit-button" onClick={switchWantWork}>Switch to {wantWork.localeCompare("Yes") == 0 ? "No" : "Yes"}</div>
        </div>) : null}
      </div>
      
      </div>
      <div className="switch-button" onClick={switchPosition}>Switch To {notPosition}</div>
    </div>
  );
}

export default Profile;