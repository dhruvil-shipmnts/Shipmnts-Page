import React from 'react';
import ColorScreens from './ColorScreens';
import { PricingAdBg } from '../../assets/index';

const PricingModelAd = () => {
  const content = {
    title: 'Cutting-edge software at Forwarder Friendly Prices',
    imageSrc: PricingAdBg,
    backgroundColor: '#FFF2E2',
    titleColor: '#7A1600',
  };

  return (
    <div id={'pricing'}>
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

export default PricingModelAd;
