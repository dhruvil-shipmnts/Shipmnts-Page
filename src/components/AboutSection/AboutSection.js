import React from 'react';
import '../AboutSection/AboutSection.css';
import Linkdin from '../AboutSection/linkdin.svg';
export default function AboutSection() {
  return (
    <div id="about" className="about-section">
      <p className="about-para">© 2023 Logistixian Technologies Private Limited.</p>
      <a href="https://in.linkedin.com/company/shipmnts" target="_blank" rel="noreferrer">
        <img style={{ height: '1.5rem' }} src={Linkdin} alt="Linkdin"></img>
      </a>
    </div>
  );
}
