import React from 'react';
import ColorScreens from './ColorScreens';
import { SecurityNew } from '../../assets/index';

const SecuritySection = () => {
  const content = {
    title: 'With Great Power Comes Great Security',
    imageSrc: SecurityNew,
    backgroundColor: '#FAE8FF',
    titleColor: '#60007B',
  };

  return (
    <div id={'security'}>
      <ColorScreens {...content}>
        <p className="security-text body-text">
          A highly compatible system with <strong>24/7 availability</strong>, global disaster
          recovery, <strong>automated hourly backups</strong>, data maintenance, MFA, and 256-bit
          encryption for both transit and <strong>storage</strong>, ensuring seamless business
          continuity.
        </p>
      </ColorScreens>
    </div>
  );
};

export default SecuritySection;
