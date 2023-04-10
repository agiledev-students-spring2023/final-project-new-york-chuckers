import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { freelancerApi } from '../../../api/freelancer';
import { List } from '../../common/list/List';
import { ListItem } from '../../common/list/ListItem';
import { SearchBar } from '../../common/SearchBar';
import FreelancerListItem from '../FreelancerListItem/FreelancerListItem';
import './FreelancerList.css';

function FreelancerList() {
  const [freelancers, setFreelancers] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchFreelancers = async () => {
      const data = await freelancerApi.listFreelancers();

      setFreelancers(data);
    };

    fetchFreelancers();
  }, []);

  function handleSearch(query) {
    setQuery(query);
  }

  const filteredFreelancers = freelancers.filter(
    p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.position.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="freelancer-list__wrapper">
      <SearchBar onSearch={handleSearch} />
      <List>
        {filteredFreelancers.map(({ id, name, position, pay }) => (
          <FreelancerListItem
            key={id}
            id={id}
            name={name}
            position={position}
            pay={pay}
          />
        ))}
      </List>
    </div>
  );
}

export default FreelancerList;
