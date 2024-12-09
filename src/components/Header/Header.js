import React from "react";
import "./Header.css";
import Image from "./image.png";
import CustomButton from "../Button/CustomButton";
import Play from "../Button/play.png"
import { HashLink as Link } from "react-router-hash-link";
export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img className="logo" src={Image} alt="Logo" />
        <nav className="nav">
          <Link smooth to="#products">Products</Link>
          <Link smooth to="#pricing">Pricing</Link>
          <Link smooth to="#about">About us</Link>
        </nav>
        <div className="actions">
          <CustomButton
            style={{
              color: "#ffffff",
              background: "#ff6f61",
              marginRight: "1rem",
            }}
            link={"https://share.hsforms.com/1bgqKhlUxTRSRt1HEWX-Jsg1yzii"}
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
            link="https://booking.shipmnts.com/"
          >
            Sign In
          </CustomButton>
        </div>
      </div>
    </header>
  );
}
