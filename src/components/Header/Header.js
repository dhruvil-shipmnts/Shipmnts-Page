import React from "react";
import "./Header.css";
import Image from "./image.png";
import CustomButton from "../Button/CustomButton";
import Play from "../Button/play.png"
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
          <CustomButton
            style={{
              color: "#ffffff",
              background: "#ff6f61",
              marginRight: "1rem",
            }}
          >
            Demo
            <img src={Play} alt="" />
          </CustomButton>
          <CustomButton
            style={{
              background: "none",
              color: "#ff6f61",
              border: "1px solid #ff6f61",
            }}
          >
            Sign In
          </CustomButton>
        </div>
      </div>
    </header>
  );
}
