import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoPrevPage } from '../../../hooks/useGoPrevPage';
import { InputTitle } from '../../common/input/InputTitle';
import './NewPosition.css';
import { getLoginUserId, getLoginUserType } from '../../../utils/parseToken';

function NewPosition() {
  const [dbID, setdbID] = useState('');
  const navigate = useNavigate();
  const [status, setStatus] = useState({});
  const [goPrevPage] = useGoPrevPage();

  useEffect(() => {
    const loginUserId = getLoginUserId();
    setdbID(loginUserId);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    const info = {
      title: e.target.title.value,
      company: e.target.company.value,
      position: e.target.position.value,
      description: e.target.description.value,
      pay: e.target.pay.value || '0',
      contact: e.target.contact.value,
      recruiter: dbID,
    };

    const response = await axios.post(window.backend + "/new-position", info);
    if (response.data.status === "approve"){
      setStatus(response.data.position);
      navigate("/position");
    }
    else{
      alert(response.data.alert);
    }
  };
  return (
    <div className="new-position__wrapper">
      <form onSubmit={handleSubmit}>
        <div className="item__wrapper">
          <InputTitle>Title:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="title" placeholder="Searching for new Defense Teacher at Hogwartz"/>
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Company Info:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="company" placeholder="Hogwartz School of Witchcraft and Wizardry" />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Position:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="position" placeholder="Defense Against the Dark Arts Professor" />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Hourly Pay:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="number"
              step="0.01"
              name="pay"
              placeholder="$10.00"
            />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Description:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="text"
              name="description"
              placeholder="Teach students about the dark arts and how to defend from them"
            />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Recruiter Contact:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="text"
              name="contact"
              placeholder="Albus.Dumbledor@hogwarts.com"
            />
          </div>
        </div>
        <input className="submit-btn" type="submit" value="Post" />
        <div className="cancel-btn">
          <div onClick={goPrevPage}>Cancel</div>
        </div>
      </form>
    </div>
  );
}

export default NewPosition;
