import React, { useState } from 'react';
import './CompanyProfile.css';
import { Link } from 'react-router-dom';

function CompanyProfile() {
  const [position, setPosition] = useState("Recruiter");
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
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/company-profile`)
      .then(response => {
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
    // fetch messages
    fetchData()
  }, []) 

  const settingsUpdate = () => {
    axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/company-profile/save`, {
      id: id,
      name: name,
      email: email,
      phone: phone,
      industry: industry,
    })
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
  
  return (
    <div>
    <div className="hero-section">
      <div className="hero-content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Company Logo" className="company-logo" />
        <p>Amazon is a multinational technology company that primarily operates in e-commerce, cloud computing, digital streaming, and artificial intelligence. Founded in 1994, it began as an online bookstore and has since become one of the largest online retailers in the world.</p>
      </div>
    </div>
    <div className="description-section">
      {/* Check if recruiter – need to add authentication this is a recruiter for this company – sprint 3*/}
      {position === 'Recruiter' ? (            
       <div className="info-box">
        <div className="info-label">Edit this company page</div>
        <Link to="/edit-company" className= "link-out">Edit Company</Link>
      </div>
     ) : null}
    </div>
    </div>
  );
}

export default CompanyProfile;
