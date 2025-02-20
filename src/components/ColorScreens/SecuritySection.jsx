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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore voluptatibus molestias
          placeat, mollitia suscipit unde quisquam omnis voluptate exercitationem illum nemo fugiat
          reprehenderit harum blanditiis aperiam tempore. Eveniet libero minima porro nobis!
          Reprehenderit, atque pariatur.
        </p>
      </ColorScreens>
    </div>
  );
};

export default SecuritySection;
