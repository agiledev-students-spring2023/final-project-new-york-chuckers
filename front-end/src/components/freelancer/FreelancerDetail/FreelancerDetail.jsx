import React, { useEffect, useState } from 'react';
import { freelancerApi } from '../../../api/freelancer';
import { useConfirmDialog } from '../../../hooks/useConfirmDialog';
import { Image } from '../../common/Image';
import { Modal } from '../../common/Modal';
import { TextCard } from '../../common/TextCard';
import './FreelancerDetail.css';

function FreelancerDetail({ id }) {
  const [freelancer, setFreelancer] = useState(null);

  const { openConfirmDialog, ConfirmDialog } = useConfirmDialog();

  useEffect(() => {
    const fetchFreelancer = async () => {
      const data = await freelancerApi.listFreelancers();

      setFreelancer(data.find(f => f.id === id));
    };

    fetchFreelancer();
  }, []);

  if (freelancer === null) {
    return <div>Loading...</div>;
  }

  const {
    name,
    position,
    pay,
    age,
    school,
    introduction,
    pastProject,
    profile,
    contact,
  } = freelancer;

  return (
    <div className="freelancer-detail__wrapper">
      <div className="freelancer-detail__image">
        <Image src={profile} height="160px" />
      </div>
      <div className="freelancer-detail__info">
        <TextCard title="Name">{name}</TextCard>
        <TextCard title="Age">{age}</TextCard>
        <TextCard title="School">{school}</TextCard>
      </div>
      <div className="freelancer-detail__info">
        <TextCard title="Position">{position}</TextCard>
        <TextCard title="Pay">{pay}</TextCard>
      </div>
      <TextCard title="Introduction">{introduction}</TextCard>
      <TextCard title="Past Project" wrapped>
        <a href={pastProject}>{pastProject}</a>
      </TextCard>
      <TextCard title="Contact">
        <div
          className="freelancer-detail__contact-button"
          onClick={openConfirmDialog}
        >
          Freelancer Contact
        </div>
      </TextCard>
      <ConfirmDialog
        title="Contact"
        subtitle="Reach out to the freelancer using this email"
      >
        <div className="freelancer-detail__modal-contact-email">
          <div className="freelancer-detail__modal-contact-email-text">
            {contact}
          </div>
        </div>
      </ConfirmDialog>
    </div>
  );
}

export default FreelancerDetail;
