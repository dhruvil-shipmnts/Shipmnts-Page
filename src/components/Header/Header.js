import React from "react";
import './Header.css';
import Image from './image.png'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
          <img className="logo" src={Image} alt="Logo" />
        <nav className="nav">
          <a href="#products">Products</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About us</a>
        </nav>
        <div className="actions">
          <button className="demo-button">Demo</button>
          <button className="signin-button">Sign in</button>
        </div>
      </div>
    </header>
  );
}
