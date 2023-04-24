import React, { useState } from 'react';
import './SearchBar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    onSearch(query);
  }, [query]);

  return (
    <div className="search-bar__wrapper">
      <form className="search-bar_form">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search by Name or Position"
          className="search-bar__input"
        />
      </form>
    </div>
  );
}

export default SearchBar;
