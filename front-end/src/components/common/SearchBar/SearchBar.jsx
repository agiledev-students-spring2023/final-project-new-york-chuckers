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
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
