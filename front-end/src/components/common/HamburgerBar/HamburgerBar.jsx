import './HamburgerBar.css';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect } from 'react';

// functionality
function HamburgerBar({ onSearch }) {
  const [query, setQuery] = useState('');

  // handling change
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  // On click
  useEffect(() => {
    onSearch(query);
  }, [query]);

  // Specfic Actions
  return (
    <div className="hamburger-bar__wrapper">
      <form className="hamburger-bar_form">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="Hamburger-bar__input"
        />
      </form>
    </div>
  );
}

export default HamburgerBar;

