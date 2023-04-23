import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import profileImage from '../../Assets/logo.svg';
import './EditCompany.css';

function EditCompany() {
  const [id, setID] = useState(12);
  const [name, setName] = useState("John Smith");
  const [company, setCompany] = useState("Amazon")
  const [email, setEmail] = useState("john.smith@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [industry, setIndustry] = useState("Technology");
  const [isEditable, setIsEditable] = useState(false);
  const [isEditableCompany, setIsEditableCompany] = useState(false);
  const [image, setImage] = useState(profileImage);
  const [imageBackground, setImageBackground] = useState('https://assets.aboutamazon.com/dims4/default/32861da/2147483647/strip/true/crop/1600x901+0+83/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fc3%2F15%2F202c3f54402da5128d962a969b02%2Famazon-nashville-3.jpg');


  const fetchData = () => {
    axios
      // .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/settings`)
      //need to fix this
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/edit-company`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const id = response.data.company.id
        setID(id)
        const name = response.data.company.name
        setName(name)
        const email = response.data.company.email
        setEmail(email)
        const phone = response.data.company.phone
        setPhone(phone)
        const industry = response.data.company.industry
        setIndustry(industry)
        // setImage(image)
      })
      .catch(err => {
      })
      .finally(() => {
      })
  }

  useEffect(() => {
    // fetch messages this once
    fetchData()
  }, []) 

  const settingsUpdate = () => {
    axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/edit-company/save`, {
      id: id,
      name: name,
      email: email,
      phone: phone,
      industry: industry,
    })
}
  //for the switch button, find the opposite
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
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

    settingsUpdate();
    console.log(name, email, phone, industry);
  }

  const handleProfileButtonClick = e => {
    alert(`You clicked the button to edit your profile. Upload Image!`)
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
        <div className="edit-profile-button">Edit Logo</div>
        <input type="file" accept=".jpg,.jpeg,.png" id="fileInput" onChange={handleFileChange} className="invisible"/>
      </div>
    );
  }

  function FileInputBackground(props) {
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
        <div className="edit-profile-button"onClick={handleProfileButtonClick}>Edit Background Image</div>
        <input type="file" accept=".jpg,.jpeg,.png" id="fileInput" onChange={handleFileChange} className="invisible"/>
      </div>
    );
  }

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  const handleImageChangeBackground = (newImage) => {
    setImageBackground(newImage);
  };

  return (
    <div className="settings-container">
      <h1>
        Edit {company}'s Profile
      </h1>
      <div className="info-container">
        <div className="info-box">
          <div className="info-label">Company Name:</div>
          <div className="info-value">{company}</div>
          <div className="edit-button" onClick={handleEdit}>Edit</div>
          <input type="text" className="edit-field" value={company} onChange={handleCompanyChange} />
          <div className="save-button" onClick={handleSave}>Save</div>
        </div>
        <div className="info-box">
          <div className="info-label">Recruiter Contact Email:</div>
          <div className="info-value">{email}</div>
          <div className="edit-button" onClick={handleEdit}>Edit</div>
          <input type="text" className="edit-field" value={email} onChange={handleEmailChange} />
          <div className="save-button" onClick={handleSave}>Save</div>
        </div>
        <div className="info-box">
          <div className="info-label">Recruiter Phone Number:</div>
          <div className="info-value">{phone}</div>
          <div className="edit-button" onClick={handleEdit}>Edit</div>
          <input type="text" className="edit-field" value={phone} onChange={handlePhoneChange} />
          <div className="save-button" onClick={handleSave}>Save</div>
        </div>
      <div className="industry-container">
        <div className="info-box"> 
          <div className="info-label">Industry:</div>
          <div className="info-value">{industry}</div>
          <div className="edit-button" onClick={handleEdit}>Edit</div>
          <input type="text" className="edit-field" value={industry} onChange={handleIndustryChange}/>
          <div className="save-button" onClick={handleSave}>Save</div>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-image">
          <img src={image} alt="Profile" />
        </div>
        <div className="edit-file-button">
          <FileInput onChange={handleImageChange} className="edit-profile-button"/>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-image">
          <img src={imageBackground} alt="Profile" />
        </div>
        <div className="edit-file-button">
          <FileInputBackground onChange={handleImageChangeBackground} className="edit-profile-button"/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default EditCompany;
