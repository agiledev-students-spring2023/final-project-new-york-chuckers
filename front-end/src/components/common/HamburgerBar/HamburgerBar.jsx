import React, { useState } from 'react';

function HamburgerBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="hamburger-bar">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li><a href="#">Check Out Freelancers</a></li>
        <li><a href="#">Check Out Job Positions</a></li>
        <li><a href="#">User Profile and Settings</a></li>
      </ul>
    </nav>
  );
}

export default HamburgerBar;
