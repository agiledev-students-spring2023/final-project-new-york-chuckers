import React from 'react';
import './SearchBar.css';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {
  return (
    <div className="search-bar__wrapper">
      <input type="text" className="search-bar__input" />
      <div className="search-bar__submit-btn">
        <AiOutlineSearch />
      </div>
    </div>
  );
}

export default SearchBar;
