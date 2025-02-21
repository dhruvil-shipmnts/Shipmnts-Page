import React from 'react';
import '../PricingPage/PricingCard.css';
import DemoButton from '../Common/DemoButton';

export default function PricingCard({ planType, price, perYearPrice, text }) {
  return (
    <>
      <div className="pricing-card">
        <div className="pricing-def">
          <p className="card-type">{planType}</p>
          <h1 className="card-price">₹{price}</h1>
          <p className="card-subprice">per seat/mo</p>
          <p className="card-subprice">₹{perYearPrice}/yr</p>
        </div>
        <div className="pricing-card-definition">
          <p>{text}</p>
          <DemoButton variant="brown-white" showPlayLogo={false} />
        </div>
      </div>
    </>
  );
}
