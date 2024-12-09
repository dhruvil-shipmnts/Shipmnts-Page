import React from "react";
import "../PricingPage/PricingCard.css";
import CustomButton from "../Button/CustomButton";
export default function PricingCard({ planType, price, perYearPrice, text }) {
  return (
    <>
      <div className="pricing-card">
        <div className="pricing-def">
          <p className="card-type">{planType}</p>
          <h1 className="card-price">₹{price}</h1>
          <p className="card-subprice">per seat/mo</p>
          <p className="card-subprice"> ₹{perYearPrice}/yr</p>
        </div>
        <div>
          <p>
            {text}
          </p>
          <CustomButton style={{ color: "#7A1600", backgroundColor: '#ffffff' }}>
            Schedule Demo
          </CustomButton>
        </div>
      </div>
    </>
  );
}
