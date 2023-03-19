import React from 'react';
import { List } from '../../common/list/List';
import { ListItem } from '../../common/list/ListItem';
import FreelancerListItem from '../FreelancerListItem/FreelancerListItem';
import './FreelancerList.css';

function FreelancerList() {
  return (
    <div className="freelancer-list__wrapper">
      <List>{/* TODO: Add multiple FreelancerListItem components*/}</List>
    </div>
  );
}

export default FreelancerList;
