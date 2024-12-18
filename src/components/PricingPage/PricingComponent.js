import React from "react";
// import PricingCard from "./PricingCard";
import "../PricingPage/PricingComponent.css";
import CustomButton from "../Button/CustomButton";
import Play from "../Button/play.svg";
export default function PricingComponent() {
  // const content = [
  //   {
  //     planType: "Essential",
  //     price: "1300",
  //     perYearPrice: "15,600",
  //     text: "The customer support plan for individuals, startups, and small businesses.",
  //   },
  //   {
  //     planType: "Advanced",
  //     price: "2100",
  //     perYearPrice: "25,200",
  //     text: "Powerful automation tools and AI features for growing support teams",
  //   },
  //   {
  //     planType: "Expert",
  //     price: "3200",
  //     perYearPrice: "38,400",
  //     text: "Collaboration, security and reporting tools for large support teams.",
  //   },
  // ];
  return (
    <div id="pricing" className="pricing-page">
      <div className="pricing-page-demo">
        <h2 className="pricing-title">
          Your front and back offices in one logistics software.
        </h2>
        <CustomButton
            style={{
              color: "#FFFFFF",
              background: "#3A2B2B",
              padding: "10px 20px"
            }
          }
            link={"https://share.hsforms.com/1bgqKhlUxTRSRt1HEWX-Jsg1yzii"}
          >
            <span style={{ fontWeight: 600, display: "inline-block", marginRight: "8px" }}>Get Demo</span>
            <img src={Play} alt="" />
          </CustomButton>
      </div>
      {/* <div className="pricing-card-container">
        <h4
          className="title-highlight"
          style={{ color: "#7A1600", fontSize: "1.6rem", margin: "1rem" }}
        >
          Our Pricing
        </h4>
        <div className="pricing-card-div">
          <PricingCard {...content[0]} />
          <PricingCard {...content[1]} />
          <PricingCard {...content[2]} />
        </div>
      </div> */}
    </div>
  );
}
