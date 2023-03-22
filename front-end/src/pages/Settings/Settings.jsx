import React, { useState } from 'react';
import profileImage from '../../Assets/logo.svg';
import './Settings.css';

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

function Settings() {
  const [image, setImage] = useState('https://via.placeholder.com/150');

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  return (
    <div>
      <FileInput onChange={handleImageChange} />
      <ImageDisplay image={image} />
    </div>
  );
}

export default Settings;