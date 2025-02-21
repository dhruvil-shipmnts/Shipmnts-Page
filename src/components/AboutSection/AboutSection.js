import React from 'react';
import { HeaderLogo, LinkedIn } from '../../assets';
import '../AboutSection/AboutSection.css';
import { Divider } from 'antd';

export default function AboutSection() {
  const socials = [
    {
      label: 'LinkedIn',
      icon: LinkedIn,
      link: 'https://in.linkedin.com/company/shipmnts',
    },
  ];
  return (
    <section className="about-container">
      <div id="about" className="about-section">
        <div className="about-content">
          <img src={HeaderLogo} alt="SHIPMNTS" />
          <p>
            We are a tech platform for Freight Forwarders, Importers, Exporters, and CHAs. Shipmnts
            streamlines Sales, Pricing, Documentation, Cargo Operations, Billing, and Compliance -
            all in one place.
          </p>
          <p>
            Each tool is powerful alone, but together, they transform how logistics businesses
            operate.
          </p>
          <p className="orange-text">The only app you'll ever need to run your business.</p>
        </div>
        <div className="contact-us">
          <div>
            <h3 className="about-heading">Contact us</h3>
            <a href="mailto:sales@shipmnts.com">sales@shipmnts.com</a>
          </div>
          <div>
            <h3 className="about-heading">Follow us on</h3>
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
        </div>
      </div>
      <Divider className="about-divider" />
      <div>
        <p className="crafted-text">Crafted with 💜 in Ahmedabad, India</p>
      </div>
    </section>
  );
}
