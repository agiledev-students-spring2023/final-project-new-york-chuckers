import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { positionApi } from '../../../api/position';
import { useConfirmDialog } from '../../../hooks/useConfirmDialog';
import { Image } from '../../common/Image';
import { TextCard } from '../../common/TextCard';
import './PositionDetail.css';

function PositionDetail({ id }) {
  const [positionObj, setPositionObj] = useState(null);
  const params = useParams();

  const { openConfirmDialog, ConfirmDialog } = useConfirmDialog();

  useEffect(() => {
    const fetchPosition = async () => {
      const data = await positionApi.listPositions();
      setPositionObj(data.find(f => f._id === params.id));
    };

    fetchPosition();
  }, []);

  if (positionObj === null) {
    return <div>Loading...</div>;
  }

  const {
    title,
    position,
    pay,
    description,
    recruiter,
    profile,
    contact,
    company,
  } = positionObj;

  return (
    <div className="position-detail__wrapper">
      <TextCard title="Name">{title}</TextCard>
      <div className="position-detail__image">
        <Image src={profile} height="160px" />
      </div>
      <TextCard title="Company Info">{company}</TextCard>
      <div className="position-detail__info">
        <TextCard title="Position">{position}</TextCard>
        <TextCard title="Pay">{pay}</TextCard>
      </div>
      <TextCard title="Description">{description}</TextCard>
      <TextCard title="Recruiter Name">{recruiter}</TextCard>
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
    </div>
  );
}

export default PositionDetail;
