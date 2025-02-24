import React from 'react';
import '../PricingPage/PricingComponent.css';
// import { Col, Switch } from 'antd';
// import PricingCard from './PricingCard';
import DemoButton from '../Common/DemoButton';
import { PlayLogoBlack } from '../../assets';

// const content = [
//   {
//     planType: 'Essential',
//     price: '2000',
//     perYearPrice: '24,000',
//     text: 'The customer support plan for individuals, startups, and small businesses.',
//   },
//   {
//     planType: 'Business',
//     price: '4000',
//     perYearPrice: '25,200',
//     text: 'Powerful automation tools and AI features for growing support teams',
//   },
//   {
//     planType: 'Enterprise',
//     price: '3200',
//     perYearPrice: '38,400',
//     text: 'Collaboration, security and reporting tools for large support teams.',
//   },
// ];

export const PricingComponent = () => {
  // const [isAnnually, setIsAnnually] = React.useState(true);

  // const getStyleColor = (isActive) => {
  //   return isActive ? { color: '#303030' } : { color: '#303030', opacity: 0.5 };
  // };

  return (
    <div id="pricing" className="pricing-page">
      <section className="pricing-page-demo">
        <h2 className="pricing-title header-2">
          Your Front and Back Offices in One Logistics Software.
        </h2>

        <DemoButton
          className="pricing-page-demo-button"
          size="large"
          variant={'black-white'}
          icon={<img src={PlayLogoBlack} alt="" />}
        />
      </section>
      {/* <div className="pricing-card-container">
        <p
          style={{
            color: '#7A1600',
            fontSize: '1.6rem',
            margin: '1rem',
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          Our Pricing
        </p>
        <div className="pricing-switch">
          <span style={getStyleColor(!isAnnually)}>Bill Monthly</span>{' '}
          <Switch value={isAnnually} onChange={(checked) => setIsAnnually(checked)} />{' '}
          <span style={getStyleColor(isAnnually)}>Bill Annually</span>
        </div>
        <div className="pricing-cards-container" gap={40} justify="center">
          <Col lg={6} md={6} sm={24}>
            <PricingCard {...content[0]} />
          </Col>
          <Col lg={6} md={6} sm={24}>
            <PricingCard {...content[1]} />
          </Col>
          <Col lg={6} md={6} sm={24}>
            <PricingCard {...content[2]} />
          </Col>
        </div>
      </div> */}
    </div>
  );
};

export default PricingComponent;
