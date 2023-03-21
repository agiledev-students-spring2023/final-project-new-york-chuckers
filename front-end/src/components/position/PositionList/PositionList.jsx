import React, { useEffect, useState } from 'react';
import { List } from '../../common/list/List';
import { PositionListItem } from '../PositionListItem';
import { positionApi } from '../../../api/position';
import './PositionList.css';

function PositionList() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      const data = await positionApi.listPositions();

      setPositions(data);
    };

    fetchPositions();
  }, []);

  return (
    <div className="position-list__wrapper">
      <List>
        {positions.map(({ id, name, position, pay }) => (
          <PositionListItem
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

export default PositionList;
