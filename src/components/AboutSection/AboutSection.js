import React from 'react';
import { LinkedIn } from '../../assets';
import '../AboutSection/AboutSection.css';

export default function AboutSection() {
  const socials = [
    {
      label: 'LinkedIn',
      icon: LinkedIn,
      link: 'https://www.linkedin.com/company/logistixian',
    },
  ];
  return (
    <div id="about" className="about-section">
      <p className="about-para">© 2023 Logistixian Technologies Private Limited.</p>
      <div className="socials">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <img src={social.icon} alt={social.label} />
          </a>
        ))}
      </div>
    </div>
  );
}
