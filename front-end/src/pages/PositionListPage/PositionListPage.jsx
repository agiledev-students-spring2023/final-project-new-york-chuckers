import React, { useState } from 'react';
import { Header } from '../../components/common/Header';
import { PositionList } from '../../components/position/PositionList';
import { SearchBar } from '../../components/common/SearchBar';
import { HomeButton } from '../../components/common/HomeButton';
import './PositionListPage.css';

function PositionListPage() {
  const [results, setResults] = useState([]);

  const handleSearch = query => {
    // Perform search logic here and update the results state
    setResults([...results, query]);
  };

  return (
    <div className="position-list-page__wrapper">
      <Header />
      <PositionList />
      <SearchBar onSearch={handleSearch} />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
      <HomeButton />
    </div>
  );
}

export default PositionListPage;
