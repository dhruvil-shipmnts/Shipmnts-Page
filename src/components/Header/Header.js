import React from "react";
import "./Header.css";
import Shipmnts from "./shipmnts.svg";
import CustomButton from "../Button/CustomButton";
import Play from "../Button/play.svg";
// import { HashLink as Link } from "react-router-hash-link";
export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img className="logo" src={Shipmnts} alt="Logo" />
        {/* <nav className="nav">
          <Link smooth to="#products">
            Products
          </Link>
          <Link smooth to="#pricing">
            Pricing
          </Link>
          <Link smooth to="#about">
            About us
          </Link>
        </nav> */}
        <div className="actions">
          <CustomButton
            style={{
              color: "#ffffff",
              background: "#ff6f61",
              marginRight: "1rem",
              padding: "6px 14px",
            }}
            link={"https://share.hsforms.com/1bgqKhlUxTRSRt1HEWX-Jsg1yzii"}
          >
            <span
              style={{
                fontWeight: "600",
                display: "inline-block",
                marginRight: "8px",
              }}
            >
              Get Demo
            </span>
            <img src={Play} alt="" />
          </CustomButton>
          <CustomButton
            style={{
              background: "#FFFFFF",
              color: "#3A2B2B",
              padding: "6px 16px",
            }}
            link="https://booking.shipmnts.com/"
          >
            <span style={{ fontWeight: "600" }}>
              Sign In
            </span>
          </CustomButton>
        </div>
      </div>
    </header>
  );
}
