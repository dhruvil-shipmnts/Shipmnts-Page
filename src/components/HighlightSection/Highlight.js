import React, { useEffect, useState } from 'react';
import './Highlight.css';
import CarouselWrapper from '../Carousel/CarouselWrapper';
import {
  Actionable_Desktop,
  Actionable_Mobile,
  AI_Desktop,
  AI_Mobile,
  Cutting_Desktop,
  Cutting_Mobile,
  Digital_Desktop,
  Digital_Mobile,
  Personalised_Desktop,
  Personalised_Mobile,
  Productivity_Desktop,
  Productivity_Mobile,
  With_Desktop,
  With_Mobile,
} from '../../assets';

const CarouselScreenWrapper = ({
  backgroundColor,
  titleColor,
  title,
  imageSrc,
  sectionHyperLink,
  mobileImageSrc,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div
      className="page-container card"
      style={{
        backgroundImage: `url("${isMobile ? mobileImageSrc : imageSrc}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="highlight-card-header">
        <h6 className="page-title" style={{ color: titleColor || '#000000' }}>
          {title}
        </h6>
      </div>
      <div className="section-navigate-button">
        <a href={`#${sectionHyperLink}`}>Learn more</a>
      </div>
    </div>
  );
};

const Highlight = () => {
  const content = [
    {
      title: 'Digital Platform for your Customers',
      imageSrc: Digital_Desktop,
      backgroundColor: '#FFF2E2',
      titleColor: '#7A1600',
      sectionHyperLink: 'digital_platform_section',
      mobileImageSrc: Digital_Mobile,
    },
    {
      title: 'AI first apps for more efficient teams',
      imageSrc: AI_Desktop,
      backgroundColor: '#FEFFC7',
      titleColor: '#7A1600',
      sectionHyperLink: 'ai_driven_apps',
      mobileImageSrc: AI_Mobile,
    },
    {
      title: 'Actionable Insights for Faster Decisions',
      imageSrc: Actionable_Desktop,
      backgroundColor: '#FAE8FF',
      titleColor: '#60007B',
      sectionHyperLink: 'actionable_insight',
      mobileImageSrc: Actionable_Mobile,
    },
    {
      title: 'Productivity & Multi-Party Collaboration toolkit',
      imageSrc: Productivity_Desktop,
      backgroundColor: '#FFF2E2',
      titleColor: '#7A1600',
      sectionHyperLink: 'collaboration',
      mobileImageSrc: Productivity_Mobile,
    },
    {
      title: 'Personalized and Proactive Support you can count on',
      imageSrc: Personalised_Desktop,
      backgroundColor: '#FEFFC7',
      titleColor: '#7A1600',
      sectionHyperLink: 'support',
      mobileImageSrc: Personalised_Mobile,
    },
    {
      title: 'With Great Power Comes Great Security',
      imageSrc: With_Desktop,
      backgroundColor: '#FAE8FF',
      titleColor: '#60007B',
      sectionHyperLink: 'security',
      mobileImageSrc: With_Mobile,
    },
    {
      title: 'Cutting-Edge Software at Forwarder-Friendly Prices',
      imageSrc: Cutting_Desktop,
      backgroundColor: '#FFF2E2',
      titleColor: '#7A1600',
      sectionHyperLink: 'pricing',
      mobileImageSrc: Cutting_Mobile,
    },
  ];
  return (
    <section id="products" className="highlight-container">
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
    </section>
  );
};

export default Highlight;
