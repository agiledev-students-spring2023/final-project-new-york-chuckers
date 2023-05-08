import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGoPrevPage } from '../../../hooks/useGoPrevPage';
import { InputTitle } from '../../common/input/InputTitle';
import './EditPosition.css';
import { getLoginUserId, getLoginUserType } from '../../../utils/parseToken';
import { PageTitle } from '../../../components/common/PageTitle';
import Logo from '../../../components/common/Logo/Logo';
import { positionApi } from '../../../api/position';

function EditPosition() {
  const { postID } = useParams();
  const [dbID, setDbID] = useState('');
  const navigate = useNavigate();
  const [status, setStatus] = useState({});
  const [goPrevPage] = useGoPrevPage();
  const [positionObj, setPositionObj] = useState(null);

  useEffect(() => {
    const fetchPosition = async () => {
      const data = await positionApi.listPositions();
      setPositionObj(data.find(f => f._id === postID));
    };
  
    fetchPosition();
    const loginUserId = getLoginUserId();
    setDbID(loginUserId);
  }, [postID]);
  
  if (!positionObj) {
    return <div>Failed to Load, Please Try Again</div>;
  }
  
  const {
    title,
    position,
    pay,
    description,
    contact,
    company,
  } = positionObj;

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

    const response = await axios.post(window.backend + "/edit-position/"+`${postID}`, info);
    if (response.data.status === "approve"){
      setStatus(response.data.position);
      navigate("/position");
    }
    else{
      console.log(response.data.status);
      alert(response.data.alert);
    }
  };
  return (
    <div className="setup-page__wraper">
    <Logo className="setup-page-logo" />
    <PageTitle>Edit Position</PageTitle>
    <div className="new-position__wrapper">
      <form onSubmit={handleSubmit}>
        <div className="item__wrapper">
          <InputTitle>Title:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="title" placeholder="Searching for new Defense Teacher at Hogwartz" defaultValue={title}/>
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Company Info:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="company" placeholder="Hogwartz School of Witchcraft and Wizardry" defaultValue={company}/>
          </div>
        </div>
        <div className="item__wrapper">
          <InputTitle>Position:</InputTitle>
          <div className="text-field__wrapper">
            <input type="text" name="position" placeholder="Defense Against the Dark Arts Professor" defaultValue={position}/>
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
              defaultValue={pay}
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
              defaultValue={description}
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
              defaultValue={contact}
            />
          </div>
        </div>
        <input className="submit-btn" type="submit" value="Save" />
        <div className="cancel-btn">
          <div onClick={goPrevPage}>Cancel</div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default EditPosition;
