import React from 'react';
import ColorScreens from './ColorScreens';
import { PricingAdBg } from '../../assets/index';

const PricingModelAd = () => {
  const content = {
    title: 'Cutting-Edge Software at Forwarder-Friendly Prices',
    imageSrc: PricingAdBg,
    backgroundColor: '#FFF2E2',
    titleColor: '#7A1600',
  };

  return (
    <div id={'pricing'}>
      <ColorScreens {...content}></ColorScreens>
    </div>
  );
};

export default PricingModelAd;
