import React, { useState } from 'react';
import './CompanyProfile.css';
import { Link } from 'react-router-dom';

function CompanyProfile() {
  const [position, setPosition] = useState("Recruiter");
  
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