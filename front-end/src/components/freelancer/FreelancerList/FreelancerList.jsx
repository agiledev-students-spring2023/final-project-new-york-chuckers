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
      p.role.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="freelancer-list__wrapper">
      <SearchBar onSearch={handleSearch} />
      <List>
        {filteredFreelancers.map(({ _id, name, role, pay }) => (
          <FreelancerListItem
            key={_id}
            id={_id}
            name={name}
            position={role}
            pay={pay}
          />
        ))}
      </List>
    </div>
  );
}

export default FreelancerList;
