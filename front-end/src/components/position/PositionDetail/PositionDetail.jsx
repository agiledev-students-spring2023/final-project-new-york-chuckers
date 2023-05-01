import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { positionApi } from '../../../api/position';
import { useConfirmDialog } from '../../../hooks/useConfirmDialog';
import { Image } from '../../common/Image';
import { TextCard } from '../../common/TextCard';
import './PositionDetail.css';
import { getLoginUserId, getLoginUserType } from '../../../utils/parseToken';

function PositionDetail({ id }) {
  const navigate = useNavigate();
  const [dbID, setDbID] = useState('');
  const [recruiterID, setRecruiterID] = useState('');
  const [positionObj, setPositionObj] = useState(null);
  const params = useParams();
  const [name, setName] = useState('');

  const { openConfirmDialog, ConfirmDialog } = useConfirmDialog();
  const { openConfirmDialogDelete, ConfirmDialogDelete } = useConfirmDialog();

  useEffect(() => {
    const fetchPosition = async () => {
      const data = await positionApi.listPositions();
      setPositionObj(data.find(f => f._id === params.id));
    };
  
    fetchPosition();
    const loginUserId = getLoginUserId();
    setDbID(loginUserId);
  }, [params.id]);
  
  const fetchRecruiter = async () => {
    if (!positionObj) {
      return;
    }
    const { recruiter } = positionObj;
    setRecruiterID(recruiter);
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/settings/${recruiter}`);
      const { name: recruiterName} = response.data.profile;
      setName(recruiterName);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (positionObj) {
      fetchRecruiter();
    }
  }, [positionObj]);
  
  if (!positionObj) {
    return <div>Loading...</div>;
  }
  
  const {
    title,
    position,
    pay,
    description,
    contact,
    company,
  } = positionObj;

  const editPost = () => {
    console.log("edit me")
    navigate(`/edit-position/${params.id}`);
  }
  const deletePost = () => {
    axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/delete-position/${params.id}`);
    navigate("/position");
  }
  
  return (
    <div className="position-detail__wrapper">
      <TextCard title="Name">{title}</TextCard>
      {/* <div className="position-detail__image">
        <Image src={profile} height="160px" />
      </div> */}
      <TextCard title="Company Info">{company}</TextCard>
      <div className="position-detail__info">
        <TextCard title="Position">{position}</TextCard>
        <TextCard title="Hourly Pay">${pay}</TextCard>
      </div>
      <TextCard title="Description">{description}</TextCard>
      <TextCard title="Recruiter Name">{name}</TextCard>
      <TextCard title="Contact">
        <div
          className="position-detail__contact-button"
          onClick={openConfirmDialog}
        >
          Recruiter Contact
        </div>
      </TextCard>
      <ConfirmDialog
        title="Contact"
        subtitle="Reach out to the recruiter using this email"
      >
        <div className="position-detail__modal-contact-email">
          <div className="position-detail__modal-contact-email-text">
            {contact}
          </div>
        </div>
      </ConfirmDialog>
      <div>
          {dbID === recruiterID ? (
              <div className="recruiter-buttons">
                <div className="edit-button" onClick= {editPost}>Edit This Post</div>
                <div className="delete-button" onClick= {deletePost}>Delete This Post</div>
              </div>
            ) : null}
      </div>
    </div>
  );
}

export default PositionDetail;
