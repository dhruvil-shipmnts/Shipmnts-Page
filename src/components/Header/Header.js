import React, { useState, useEffect } from 'react';
import './Header.css';
import Shipmnts from './shipmnts.svg';
import CustomButton from '../Button/CustomButton';
import Play from '../Button/play.svg';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="header-container">
        <img className="logo" src={Shipmnts} alt="Logo" />
        <div className="actions">
          <CustomButton
            style={{
              color: '#ffffff',
              background: '#ff6f61',
              marginRight: '1rem',
              padding: '6px 14px',
            }}
            link={'https://share.hsforms.com/1bgqKhlUxTRSRt1HEWX-Jsg1yzii'}
          >
            <span
              style={{
                fontWeight: '600',
                display: 'inline-block',
                marginRight: '8px',
              }}
            >
              Get Demo
            </span>
            <img src={Play} alt="" />
          </CustomButton>
          <CustomButton
            style={{
              background: '#FFFFFF',
              color: '#3A2B2B',
              padding: '6px 16px',
            }}
            link="https://booking.shipmnts.com/"
          >
            <span style={{ fontWeight: '600' }}>Sign In</span>
          </CustomButton>
        </div>
      </div>
    </header>
  );
}
