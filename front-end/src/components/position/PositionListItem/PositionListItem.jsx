import React from 'react';
import { Button } from '../../common/Button';
import { ListItem } from '../../common/list/ListItem';
import './PositionListItem.css';

function PositionListItem({ name, position, pay }) {
  return (
    <ListItem style={{ backgroundColor: '#F3F6F8' }}>
      <div className="position-list-item__wrapper">
        <div className="position-list-item__content">
          <div className="position-list-item__content-name">Name: {name}</div>
          <div className="position-list-item__content-info">
            Position: {position}
          </div>
          <div className="position-list-item__content-info">Pay: {pay}</div>
        </div>
        <Button>View More</Button>
      </div>
    </ListItem>
  );
}

export default PositionListItem;
