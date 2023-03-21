import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { freelancerApi } from '../../../api/freelancer';
import { List } from '../../common/list/List';
import { ListItem } from '../../common/list/ListItem';
import FreelancerListItem from '../FreelancerListItem/FreelancerListItem';
import './FreelancerList.css';

function FreelancerList() {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    const fetchFreelancers = async () => {
      const data = await freelancerApi.listFreelancers();

      setFreelancers(data);
    };

    fetchFreelancers();
  }, []);

  return (
    <div className="freelancer-list__wrapper">
      <List>
        {freelancers.map(({ id, name, position, pay }) => (
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
