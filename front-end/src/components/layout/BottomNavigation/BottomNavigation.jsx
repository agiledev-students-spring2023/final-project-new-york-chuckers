import React from 'react';
import { IconText } from '../../common/IconText';
import './BottomNavigation.css';
import { BsCardChecklist } from 'react-icons/bs';
import { MdPeopleOutline } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { useLoginCheck } from '../../../hooks/useLoginCheck';

function BottomNavigation() {
  const [isLogined] = useLoginCheck();

  return (
    <div className="bottom-navigation__wrapper">
      <div className="bottom-navigation__inner">
        <IconText
          icon={<MdPeopleOutline />}
          text="Freelancer"
          to="/freelancer"
        />
        <IconText icon={<BsCardChecklist />} text="Positions" to="/position" />
        <IconText
          icon={<CgProfile />}
          text="My Profile"
          to={isLogined ? '/settings' : '/signin'}
        />
      </div>
    </div>
  );
}

export default BottomNavigation;
