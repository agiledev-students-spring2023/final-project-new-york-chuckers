import React, { useEffect, useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import { List } from '../../common/list/List';
import { PositionListItem } from '../PositionListItem';
import { positionApi } from '../../../api/position';
import Button from '../../common/Button/Button';
import './PositionList.css';

function PositionList() {
  const [positions, setPositions] = useState([]);

  //create the navigate variable for the link to create new position 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPositions = async () => {
      const data = await positionApi.listPositions();

      setPositions(data);
    };

    fetchPositions();
  }, []);

  //function to handle if new position is clicked
  function handleNew(){
    navigate('/new-position')
  }

  return (
    <div className="position-list__wrapper">
      {
        //here I added the create new position button
      }
      <div className='open-button__wrapper'>
        <Button onClick={handleNew}>New Position</Button>
      </div>
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
