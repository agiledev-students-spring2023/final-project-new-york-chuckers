import React from 'react';
import './ListItem.css';

function ListItem({ children, ...props }) {
  return (
    <div className="list-item__wrapper" {...props}>
      {children}
    </div>
  );
}

export default ListItem;
