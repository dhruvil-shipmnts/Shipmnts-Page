import React, { useState, useEffect } from 'react';
import './Header.css';
import { HeaderLogo } from '../../assets';
import DemoButton from '../Common/DemoButton';
import { Link } from 'react-router-dom';

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
        <Link to={'/'}>
          <img className="logo" src={HeaderLogo} alt="Logo" />
        </Link>
        <div className="actions">
          <span id="nav-demo-button">
            <DemoButton />
          </span>
          <button className="btn sign-in-button button-small btn-rounded">
            <a href="https://booking.shipmnts.com/">Sign In</a>
          </button>
        </div>
      </div>
    </header>
  );
}
