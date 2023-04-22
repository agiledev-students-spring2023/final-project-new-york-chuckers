import axios from 'axios';
import { useState, useEffect, React } from 'react';
import { useNavigate, Link, redirect } from 'react-router-dom';
import { useGoPrevPage } from '../../../hooks/useGoPrevPage';
import { InputTitle } from '../../common/input/InputTitle';
import './NewPosition.css';

function NewPosition() {
  const navigate = useNavigate();
  const [status, setStatus] = useState({});
  const [goPrevPage] = useGoPrevPage();

  const handleSubmit = async e => {
    e.preventDefault();

    const info = {
      name: e.target.name.value,
      description: e.target.description.value,
      pay: e.target.pay.value || '0',
      contact: e.target.contact.value,
    };

    const response = await axios.post(window.backend + "/new-post", info);
    if (response.data.status === "approve"){
      setStatus(response.data.position);
      console.log(response.data.test);
      //navigate("/position");
    }
    else{
      alert(response.data.alert);
    }
  };
  return (
    <div className="new-position__wrapper">
      <form onSubmit={handleSubmit}>
        <div className="item__wrapper">
          <InputTitle>Position Name:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="name" placeholder="Defense Against the Dark Arts Professor" />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Description:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="text"
              name="description"
              placeholder="Teach students about the dark arts and hwo to defend from them"
            />
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Pay:</InputTitle>
          <div className="text-field__wrapper">
            <input
              type="number"
              step="0.1"
              name="pay"
              placeholder="2 Galleons"
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
