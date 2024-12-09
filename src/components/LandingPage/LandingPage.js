import React from 'react';
import './LandingPage.css'; 
import LandingImage from '../LandingPage/landingImage.png'
const LandingPage = () => {
  return (
    <div className="main-content">
      <div className="landing-section">
        <h1 className="title">TLM Platform for Modern Forwarders</h1>
        <p className="subtitle">
          Streamline your day-to-day operations, boost shipment profits, and delight your customers.
        </p>
        <div className="cta">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="cta-button">Demo</button>
        </div>
      </div>

      <div className="details-section">
        <img src={LandingImage} alt="Platform Demo" className="screenshot" />
      </div>
    </div>
  );
};

export default LandingPage;
