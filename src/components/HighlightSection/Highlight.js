import React from 'react';
import './Highlight.css';
import CarouselWrapper from '../Carousel/CarouselWrapper';
import {
  ArrowForward,
  BalanceHighLightBg,
  CollaborateHighlightBg,
  GenaiHighlightBg,
  LearnAndGrowBg,
  MobileChats,
  MobileCuttingPrice,
  MobileDigitalPlatform,
  MobileGenAI,
  MobileSecurity,
  MobileSupport,
  MobileTeam,
  SecurityHighlightBg,
  TeamHighlightBg,
  WebHighlightBg,
} from '../../assets';

const CarouselScreenWrapper = ({
  backgroundColor,
  titleColor,
  title,
  imageSrc,
  sectionHyperLink,
  mobileImageSrc,
}) => {
  return (
    <div
      className="page-container"
      style={{
        backgroundColor: backgroundColor || '#ffffff',
      }}
    >
      <h6 className="page-title" style={{ color: titleColor || '#000000' }}>
        {title}
      </h6>
      <img className="page-image desktop-image" src={imageSrc} alt={title} />
      <img className="page-image mobile-image" src={mobileImageSrc} alt={title} />

      <div className="section-navigate-icon btn-round">
        <a href={`#${sectionHyperLink}`}>
          <img src={ArrowForward} alt="->" />
        </a>
      </div>
    </div>
  );
};

const Highlight = () => {
  const content = [
    {
      title: 'Digital Platform for your Customers',
      imageSrc: WebHighlightBg,
      backgroundColor: '#FFF2E2',
      titleColor: '#7A1600',
      sectionHyperLink: 'digital_platform_section',
      mobileImageSrc: MobileDigitalPlatform,
    },
    {
      title: 'AI first apps for more efficient teams',
      imageSrc: TeamHighlightBg,
      backgroundColor: '#FEFFC7',
      titleColor: '#7A1600',
      sectionHyperLink: 'ai_driven_apps',
      mobileImageSrc: MobileTeam,
    },
    {
      title: 'Actionable Insights for Faster Decisions',
      imageSrc: GenaiHighlightBg,
      backgroundColor: '#FAE8FF',
      titleColor: '#60007B',
      sectionHyperLink: 'actionable_insight',
      mobileImageSrc: MobileGenAI,
    },
    {
      title: 'Productivity & Multi-Party Collaboration toolkit',
      imageSrc: CollaborateHighlightBg,
      backgroundColor: '#FFF2E2',
      titleColor: '#7A1600',
      sectionHyperLink: 'collaboration',
      mobileImageSrc: MobileChats,
    },
    {
      title: 'Personalized and Proactive Support you can count on',
      imageSrc: LearnAndGrowBg,
      backgroundColor: '#FEFFC7',
      titleColor: '#7A1600',
      sectionHyperLink: 'support',
      mobileImageSrc: MobileSupport,
    },
    {
      title: 'With Great Power comes Great Security',
      imageSrc: SecurityHighlightBg,
      backgroundColor: '#FAE8FF',
      titleColor: '#60007B',
      sectionHyperLink: 'security',
      mobileImageSrc: MobileSecurity,
    },
    {
      title: 'Cutting-edge software at Forwarder Friendly Prices',
      imageSrc: BalanceHighLightBg,
      backgroundColor: '#FFF2E2',
      titleColor: '#7A1600',
      sectionHyperLink: 'pricing',
      mobileImageSrc: MobileCuttingPrice,
    },
  ];
  return (
    <div id="products" className="highlight-container">
      <div className="highlight-center">
        <div className="section-title-container">
          <h1 className="section-title">Highlights</h1>
        </div>
        <div>
          <CarouselWrapper>
            <CarouselScreenWrapper {...content[0]} />
            <CarouselScreenWrapper {...content[1]} />
            <CarouselScreenWrapper {...content[2]} />
            <CarouselScreenWrapper {...content[3]} />
            <CarouselScreenWrapper {...content[4]} />
            <CarouselScreenWrapper {...content[5]} />
            <CarouselScreenWrapper {...content[6]} />
          </CarouselWrapper>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
