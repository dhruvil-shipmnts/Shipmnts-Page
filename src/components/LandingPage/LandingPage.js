import React from 'react';
import { LandingPageImage } from '../../assets';
import DemoButton from '../Common/DemoButton';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div id="landing-page" className="main-content">
      <div className="landing-section">
        <h1 className="title header-1">
          TLM Platform <br /> for Modern Forwarders
        </h1>
        <span className="subtitle body-text-2">
          Streamline your day-to-day operations, boost shipment profits, and delight your customers.
        </span>
        <DemoButton size="large" />
      </div>

      <div className="details-section">
        <img src={LandingPageImage} alt="Platform Demo" className="screenshot" />
      </div>
    </div>
  );
};

export default LandingPage;
