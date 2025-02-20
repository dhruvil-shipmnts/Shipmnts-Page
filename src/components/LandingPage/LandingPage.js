import React from 'react';
import './LandingPage.css';
import { LandingPageImage, PlayLogo } from '../../assets';

const LandingPage = () => {
  return (
    <div id="landing-page" className="main-content">
      <div className="landing-section">
        <h1 className="title">
          TLM Platform <br /> for Modern Forwarders
        </h1>
        <span className="subtitle">
          Streamline your day-to-day operations, boost shipment profits, and delight your customers.
        </span>
        <button className="demo-button landing-demo-button" link={''}>
          <a href="https://share.hsforms.com/1bgqKhlUxTRSRt1HEWX-Jsg1yzii">Get Demo</a>
          <img src={PlayLogo} alt="" />
        </button>
      </div>

      <div className="details-section">
        <img src={LandingPageImage} alt="Platform Demo" className="screenshot" />
      </div>
    </div>
  );
};

export default LandingPage;
