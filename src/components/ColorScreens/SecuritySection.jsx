import React from 'react';
import ColorScreens from './ColorScreens';
import { SecuritySectionBg } from '../../assets/index';

const SecuritySection = () => {
  const content = {
    title: 'With Great Power comes Great Security',
    imageSrc: SecuritySectionBg,
    backgroundColor: '#FAE8FF',
    titleColor: '#60007B',
  };
  // {
  //   title: 'Cutting-edge software at Forwarder Friendly Prices',
  //   imageSrc: Balance,
  //   backgroundColor: '#FFF2E2',
  //   titleColor: '#7A1600',
  // },

  return (
    <div id={'security'}>
      <ColorScreens {...content}>
        <p className="security-text">
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
