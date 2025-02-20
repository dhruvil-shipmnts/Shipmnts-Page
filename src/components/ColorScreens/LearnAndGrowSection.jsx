import React from 'react';
import ColorScreens from './ColorScreens';
import { LearnAndGrowBg } from '../../assets/index';
import { Flex } from 'antd';

const LearnAndGrowSection = () => {
  const content = {
    title: 'Learn and grow better with excellent support and resources',
    imageSrc: LearnAndGrowBg,
    backgroundColor: '#FEFFC7',
    titleColor: '#7A1600',
  };

  // {
  //   title: 'With Great Power comes Great Security',
  //   imageSrc: Security,
  //   backgroundColor: '#FAE8FF',
  //   titleColor: '#60007B',
  // },
  // {
  //   title: 'Cutting-edge software at Forwarder Friendly Prices',
  //   imageSrc: Balance,
  //   backgroundColor: '#FFF2E2',
  //   titleColor: '#7A1600',
  // },

  return (
    <div id={'support'}>
      <ColorScreens {...content}>
        <Flex justify="center" align="center">
          <ul className="colorpage-list">
            <li>Super easy to use, learn, customize</li>
            <li>Priority Support. Quarterly Business Review included in Pro & Enterprise plans.</li>
            <li>Flexible Learning Solutions</li>
          </ul>
        </Flex>
      </ColorScreens>
    </div>
  );
};

export default LearnAndGrowSection;
