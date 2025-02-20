import React, { useState, useEffect } from 'react';
import './Header.css';
import { HeaderLogo, PlayLogo } from '../../assets';

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
        <img className="logo" src={HeaderLogo} alt="Logo" />
        <div className="actions">
          <button className="demo-button " id="nav-demo-button" link={''}>
            <a href="https://share.hsforms.com/1bgqKhlUxTRSRt1HEWX-Jsg1yzii">Get Demo</a>
            <img src={PlayLogo} alt="" />
          </button>
          <button className="sign-in-button ">
            <a href="https://booking.shipmnts.com/">Sign In</a>
          </button>
        </div>
      </div>
    </header>
  );
}
