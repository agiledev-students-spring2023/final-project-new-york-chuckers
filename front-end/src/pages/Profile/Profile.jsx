import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profileImage from '../../Assets/logo.svg';
import './Profile.css';
import { BrowserRouter as Link } from 'react-router-dom';
import { Header } from '../../components/common/Header';
import BackButton from '../../components/common/BackButton/BackButton';
import { getLoginUserId, getLoginUserType } from '../../utils/parseToken';

function Profile() {
  const [dbID, setdbID] = useState('');
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const userType = getLoginUserType();
  const [profileButtonText, setProfileButtonText] = useState("Edit");
  //set position based on the local info, but fix capitalization
  const [position, setPosition] = useState(userType.charAt(0).toUpperCase() + userType.slice(1));
  const [isEditable, setIsEditable] = useState(false);
  const [image, setImage] = useState(profileImage);
  const reader = new FileReader();
  const file = new File([image], 'profile.jpg', { type: 'image/jpeg' });
  reader.readAsDataURL(file);

  useEffect(() => {
    const loginUserId = getLoginUserId();
    setdbID(loginUserId);
  }, []);

  //pull data from datbase
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/settings/${dbID}`)
      .then(response => {
        const name = response.data.profile.name;
        setName(name);
        const school = response.data.profile.school;
        setSchool(school);
        try{
          const buffer = response.data.profile.buffer;
          const mimetype = response.data.profile.mimetype;
          const imageUrl = 'data:' + mimetype + ';base64,' + buffer;
          if(buffer != null && mimetype != null){
            setImage(imageUrl);
          } else{
            setProfileButtonText("Add Profile Picture");
          }
        }catch(err){
        }
      })
      .catch(err => {})
      .finally(() => {});
  };

  useEffect(() => {
    if (dbID) {
      fetchData();
    }
  }, [dbID]);

  //push updated settings out
  const settingsUpdate = async () => {
    await axios.post(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/settings/save/${dbID}`,
      {
        name,
        school,
      },
    );
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleSchoolChange = event => {
    setSchool(event.target.value);
  };

  const handleEdit = event => {
    const infoBox = event.target.parentElement;
    const editField = infoBox.querySelector('.edit-field');
    // const saveButton = infoBox.querySelector(".save-button");
    settingsUpdate();
    if (!isEditable) {
      infoBox.classList.add('editable');
      editField.focus();
    } else {
      infoBox.classList.remove('editable');
    }
    setIsEditable(!isEditable);
  };

  const handleSave = event => {
    const infoBox = event.target.parentElement;
    const infoValue = infoBox.querySelector('.info-value');
    const editField = infoBox.querySelector('.edit-field');

    infoValue.textContent = editField.value;
    infoBox.classList.remove('editable');
    setIsEditable(false);
    settingsUpdate();
  };

  //image handling section
  const handleImageChange = newImage => {
    setImage(newImage);
    setProfileButtonText("Edit");
    handleImageUpload(newImage);
  };

  const handleImageUpload = async image => {
    const formData = new FormData();

    // Resize the image using HTML Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const image_2 = new Image();
    image_2.src = image;
    await new Promise((resolve, reject) => {
      image_2.onload = () => {
        const maxWidth = 800;
        const maxHeight = 600;
        let width = image_2.width;
        let height = image_2.height;

        if (width > height && width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        } else if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(image_2, 0, 0, width, height);

        canvas.toBlob(
          blob => {
            formData.append('image', blob, image.name);
            resolve();
          },
          'image/jpeg',
          0.8,
        );
      };
      image_2.onerror = reject;
    });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/settings/save_image/${dbID}`,
        formData,
      );
      const imageUrl =
        'data:' + response.data.mimetype + ';base64,' + response.data.buffer;
      setImage(imageUrl);
      settingsUpdate();
    } catch (error) {
      console.error('Error uploading image', error);
    }
  };

  function FileInput(props) {
    const [file, setFile] = useState(null);

    const handleFileChange = event => {
      const selectedFile = event.target.files[0];

      if (
        selectedFile &&
        (selectedFile.type === 'image/jpeg' ||
          selectedFile.type === 'image/png')
      ) {
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
        <div
          className="edit-profile-button"
          onClick={() => handleImageUpload(file)}
        >
          {profileButtonText}
        </div>
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          id="fileInput"
          onChange={handleFileChange}
          className="invisible"
        />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="settings-container">
        <div className="profile-container">
          <div className="profile__prev-btn">
            <BackButton size="large" />
          </div>
          <div className="profile-image">
            <img src={image} alt="Profile" />
          </div>
          <div className="edit-file-button">
            <FileInput
              onChange={handleImageChange}
              className="edit-profile-button"
            />
          </div>
        </div>
        <h1>Your {position} Profile</h1>
        <div className="info-container">
          <div className="info-box">
            <div className="info-label">Name:</div>
            <div className="info-value">{name}</div>
            <div className="edit-button" onClick={handleEdit}>
              Edit
            </div>
            <input
              type="text"
              className="edit-field"
              value={name}
              onChange={handleNameChange}
            />
            <div className="save-button" onClick={handleSave}>
              Save
            </div>
          </div>
          <div className="info-box">
            <div className="info-label">School:</div>
            <div className="info-value">{school}</div>
            <div className="edit-button" onClick={handleEdit}>
              Edit
            </div>
            <input
              type="text"
              className="edit-field"
              value={school}
              onChange={handleSchoolChange}
            />
            <div className="save-button" onClick={handleSave}>
              Save
            </div>
          </div>
        </div>
        <div>
          {userType === 'freelancer' && (
            <Link
              to="/freelancer-update"
              className="edit-freelance-profile-button"
            >
              Edit Freelancer Posting
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
