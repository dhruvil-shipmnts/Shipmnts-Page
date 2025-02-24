import React from 'react';
import { HeaderLogo, LinkedIn } from '../../assets';
import '../AboutSection/AboutSection.css';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  const socials = [
    {
      label: 'LinkedIn',
      icon: LinkedIn,
      link: 'https://in.linkedin.com/company/shipmnts',
    },
  ];

  const OtherLinks = [
    {
      label: 'Privacy Policy',
      link: '/privacy-policy',
      type: 'internal',
    },
    {
      label: 'Help',
      link: 'https://help.shipmnts.com/portal',
    },
    {
      label: 'Blog',
      link: 'https://shipmnts.com/blog',
    },
  ];

  return (
    <div className="about-container">
      <div id="about" className="about-section">
        <div className="about-content">
          <img src={HeaderLogo} alt="SHIPMNTS" />
          <p className="body-text">
            We are a tech platform for Freight Forwarders, CHAs,Transporters, 4PLs, Importers and
            Exporters. Shipmnts streamlines Sales, Pricing, Documentation, Cargo Operations,
            Billing, and Compliance - all in one place.
          </p>
          <p className="body-text">
            Each tool is powerful alone, but together, they transform how logistics businesses
            operate.
          </p>
          <p className="orange-text body-text">
            The only app you'll ever need to run your business.
          </p>
        </div>
        <div className="links-section">
          <div>
            <h3 className="about-heading">Contact us</h3>
            <a
              href="mailto:sales@shipmnts.com"
              className="body-text"
              style={{
                textDecoration: 'underline',
              }}
            >
              sales@shipmnts.com
            </a>
          </div>
          <div className="other-links">
            <h3 className="about-heading">Other Links</h3>
            {OtherLinks.map((link, index) => (
              <p>
                {link?.type !== 'internal' ? (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="body-text"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.link} className="body-text">
                    {link.label}
                  </Link>
                )}
              </p>
            ))}
          </div>
        </div>
        <div className="socials-section">
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
      <div className="footer-text-container">
        <span className="crafted-text body-text">Crafted with 💜 in India</span>
        <span className="copyright-text body-text">
          © 2025 Logistixian Technologies Private Limited.
        </span>
      </div>
    </div>
  );
}
