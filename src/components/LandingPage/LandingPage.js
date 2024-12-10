import React from 'react';
import './LandingPage.css'; 
import LandingImage from '../LandingPage/landingImage.png'
import CustomButton from '../Button/CustomButton';
import Play from '../Button/play.svg' 
const LandingPage = () => {
  return (
    <div className="main-content">
      <div className="landing-section">
        <h1 className="title">TLM Platform for Modern Forwarders</h1>
        <p className="subtitle">
          Streamline your day-to-day operations, boost shipment profits, and delight your customers.
        </p>
        <div className="cta">
        <CustomButton link="https://share.hsforms.com/1bgqKhlUxTRSRt1HEWX-Jsg1yzii" style={{color: '#ffffff', background: '#ff6f61'}}>Demo 
          <img src={Play} alt="" />
        </CustomButton>
        </div>
      </div>

      <div className="details-section">
        <img src={LandingImage} alt="Platform Demo" className="screenshot" />
      </div>
    </div>
  );
};

export default LandingPage;
