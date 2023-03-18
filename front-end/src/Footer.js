import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/Logo.png';
import './Footer.css';

function Footer() {
  return (
    <div>
        <div className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <span className="terms">Terms and Conditions</span>
        </div>
        <div className="footer-right">
          <span className="email">Email Us: contact@testerconnector.com</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
