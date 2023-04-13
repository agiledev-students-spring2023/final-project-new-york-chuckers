import React, { useState } from 'react';
import './SearchBar.css';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar__wrapper">
      <form onSubmit={handleSubmit} className="search-bar_form">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search by Name or Position"
          className="search-bar__input"
        />
        <button type="submit" className="search-bar__submit-btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
