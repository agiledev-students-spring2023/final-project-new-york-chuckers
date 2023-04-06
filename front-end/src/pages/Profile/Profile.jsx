import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import profileImage from '../../Assets/logo.svg';
import './Profile.css';


function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [skills, setSkills] = useState("");
  const [wantWork, setWantWork] = useState("");
  const [position, setPosition] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [isEditableCompany, setIsEditableCompany] = useState(false);
  const [notPosition,setNotPosition] = useState(position.localeCompare("Freelancer") === 0 ? "Recruiter" : "Freelancer");
  const [companies, setCompanies] = useState([""])
  const [image, setImage] = useState(profileImage);

  const fetchMessages = () => {
    axios
      // .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/settings`)
      //need to fix this
      .get('http://localhost:5076/settings')
      .then(response => {
        // axios bundles up all response data in response.data property
        const name = response.data[0].name
        setName(name)
        const email = response.data[0].email
        setEmail(email)
        const phone = response.data[0].phone
        setPhone(phone)
        const industry = response.data[0].industry
        setIndustry(industry)
        const position = response.data[0].position
        setPosition(position)
        const companies = response.data[0].companies
        setCompanies(companies)
        const skills = response.data[0].skills
        setSkills(skills)
        const work = response.data[0].wantWork
        setWantWork(work)
        const image = response.data[0].image
        // setImage(image)
      })
      .catch(err => {
        // setError(err)
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        // setLoaded(true)
      })
  }

  useEffect(() => {
    // fetch messages this once
    fetchMessages()

    // set a timer to load data from server every n seconds
    // const intervalHandle = setInterval(() => {
    //   fetchMessages()
    // }, 5000)

    // // return a function that will be called when this component unloads
    // return e => {
    //   // clear the timer, so we don't still load messages when this component is not loaded anymore
    //   clearInterval(intervalHandle)
    // }
  }, []) 

  //Set the const navigate to link to the edit freelancer profile 
  const navigate = useNavigate();

  //Handle click on edit freelancer profile button
  function handleEditFreelance(){
    //This should redirect to "/edit-freelancer", but the page doesn't exist yet, so "/create-freelancer" for now
    navigate("/create-freelancer");
  }

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

  const handleProfileButtonClick = e => {
    alert(`You clicked the button to edit your profile. Upload Image!`)
  }
  
  //if recruiter, want to change industry interest to allow selecting company from a list of pre-made companies
  //need to change the text, need to change the edit button to where its now an "Find your company" button
  const switchPosition = (event) =>{
    if(isEditable || isEditableCompany){
      alert(`Please finish editin before switching profile type.`)
    }else {
      setPosition(prevPosition => {
        const newPosition = prevPosition.localeCompare("Freelancer") === 0 ? "Recruiter" : "Freelancer";
        setNotPosition(prevPosition);
        return newPosition;
      });
    }
    console.log(position, notPosition);
  }

  const switchWantWork = (event) =>{
    setWantWork(prevVal => {
      const newVal = prevVal.localeCompare("Yes") === 0 ? "No" : "Yes";
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
        <div className="edit-profile-button"onClick={handleProfileButtonClick}>Edit</div>
        <input type="file" accept=".jpg,.jpeg,.png" id="fileInput" onChange={handleFileChange} className="invisible"/>
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
          <img src={image} alt="Profile" />
          {/* <FileInput onChange={handleImageChange} className="edit-profile-button"/> */}
          {/* <div className="edit-profile-button"onClick={handleProfileButtonClick}>Edit</div> */}
        </div>
        <div className="edit-file-button">
          <FileInput onChange={handleImageChange} className="edit-profile-button"/>
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
                <input type="text" className="edit-field" value={industry}/>
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
          <div className="edit-button" onClick={switchWantWork}>Switch to {wantWork.localeCompare("Yes") === 0 ? "No" : "Yes"}</div>
        </div>) : null}
      </div>
      
      </div>

      {
        //Adding the edit freelancer profile button when on freelancer profile
      }
      <div>{position === 'Recruiter' ? (<div></div>) : (
      <div className='edit-freelance-profile-button' onClick={handleEditFreelance}>Edit Freelancer Profile</div>)}</div>
      {/* Maybe remove this from final, just to demo difference in the buttons */}
      <div className="switch-button" onClick={switchPosition}>Switch To {notPosition}</div>
    </div>
  );
}

export default Profile;