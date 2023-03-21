import React, { useEffect, useState } from 'react';
import { positionApi } from '../../../api/position';
import { useConfirmDialog } from '../../../hooks/useConfirmDialog';
import { Image } from '../../common/Image';
import { TextCard } from '../../common/TextCard';
import './PositionDetail.css';

function PositionDetail({ id }) {
  const [positionObj, setPositionObj] = useState(null);

  const { openConfirmDialog, ConfirmDialog } = useConfirmDialog();

  useEffect(() => {
    const fetchPosition = async () => {
      const data = await positionApi.listPositions();

      setPositionObj(data.find(f => f.id === id));
    };

    fetchPosition();
  }, []);

  if (positionObj === null) {
    return <div>Loading...</div>;
  }

  const {
    name,
    position,
    pay,
    description,
    recruiterName,
    profile,
    contact,
    companyInfo,
  } = positionObj;

  return (
    <div className="position-detail__wrapper">
      <TextCard title="Name">{name}</TextCard>
      <div className="position-detail__image">
        <Image src={profile} height="160px" />
      </div>
      <TextCard title="Company Info">{companyInfo}</TextCard>
      <div className="position-detail__info">
        <TextCard title="Position">{position}</TextCard>
        <TextCard title="Pay">{pay}</TextCard>
      </div>
      <TextCard title="Description">{description}</TextCard>
      <TextCard title="Recruiter Name">{recruiterName}</TextCard>
      <TextCard title="Name">{name}</TextCard>
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
