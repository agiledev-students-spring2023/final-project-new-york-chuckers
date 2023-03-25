import React, { useState } from 'react';
import { Header } from '../../components/common/Header';
import { FreelancerList } from '../../components/freelancer/FreelancerList';
import { SearchBar } from '../../components/common/SearchBar';
import { HomeButton } from '../../components/common/HomeButton';
import './SavedFreelancerListPage.css';

function SavedFreelancerListPage() {
  const [results, setResults] = useState([]);

  const handleSearch = query => {
    setResults([...results, query]);
  };

  return (
    <div className="saved-freelancer-list-page__wrapper">
      <Header />
      <FreelancerList />
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

export default SavedFreelancerListPage;
