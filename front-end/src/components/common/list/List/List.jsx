import React from 'react';
import './List.css';

function List({ children }) {
  return <div className="list__wrapper">{children}</div>;
}

export default List;
