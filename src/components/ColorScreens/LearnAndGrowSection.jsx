import React from 'react';
import ColorScreens from './ColorScreens';
import { AutoStoriesIcon, BIDLandscapeIcon, SupportNew, TrackingPadIcon } from '../../assets/index';

const LearnAndGrowSection = () => {
  const content = {
    title: 'Learn and Grow Better with Excellent Support and Resources',
    imageSrc: SupportNew,
    backgroundColor: '#FEFFC7',
    titleColor: '#7A1600',
  };

  const cardData = [
    {
      icon: BIDLandscapeIcon,
      text: 'Priority Support & Business Reviews',
    },
    {
      icon: TrackingPadIcon,
      text: 'Goal-Driven Account Management',
    },
    {
      icon: AutoStoriesIcon,
      text: 'Configurable & User-Friendly System',
    },
  ];

  return (
    <div id={'support'}>
      <ColorScreens {...content}>
        <div className="support-card-container">
          {cardData.map((card, index) => (
            <div className="support-card card disable-hover" key={index}>
              <div
                className="support-round-icon-container"
                style={{ background: content.backgroundColor }}
              >
                <img src={card.icon} alt={card.text} />
              </div>
              <p className="body-text">{card.text}</p>
            </div>
          ))}
        </div>
      </ColorScreens>
    </div>
  );
};

export default LearnAndGrowSection;
