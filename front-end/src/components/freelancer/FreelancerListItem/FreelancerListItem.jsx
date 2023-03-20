import React from 'react';
import { Button } from '../../common/Button';
import { ListItem } from '../../common/list/ListItem';
import './FreelancerListItem.css';

function FreelancerListItem({ name, position, pay }) {
  return (
    <ListItem style={{ backgroundColor: '#F3F6F8' }}>
      <div className="freelancer-list-item__wrapper">
        <div className="freelancer-list-item__content">
          <div className="freelancer-list-item__content-name">Name: {name}</div>
          <div className="freelancer-list-item__content-info">
            Position: {position}
          </div>
          <div className="freelancer-list-item__content-info">Pay: {pay}</div>
        </div>
        <Button>View Profile</Button>
      </div>
    </ListItem>
  );
}

export default FreelancerListItem;
