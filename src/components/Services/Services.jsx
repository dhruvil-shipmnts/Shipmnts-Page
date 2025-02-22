import React from 'react';
import {
  CustomsIcon,
  FinanceIcon,
  ForwardingIcon,
  Heart,
  InsightsIcon,
  PricingIcon,
  SalesIcon,
  ServicesBg,
  TransportIcon,
  WarehouseIcon,
} from '../../assets';
import './Services.css';

const Services = () => {
  const content = {
    title: 'Our Unified Suite of Apps & Copilot',
    imageSrc: ServicesBg,
    backgroundColor: '#FE6533',
    titleColor: '#FFFFFF',
  };

  const services = [
    {
      name: 'Forwarding',
      icon: ForwardingIcon,
    },
    {
      name: 'Customs',
      icon: CustomsIcon,
    },
    {
      name: 'Warehouse',
      icon: WarehouseIcon,
    },
    {
      name: 'Transport',
      icon: TransportIcon,
    },
    {
      name: 'Insights',
      icon: InsightsIcon,
    },
    {
      name: 'Sales',
      icon: SalesIcon,
    },
    {
      name: 'Pricing',
      icon: PricingIcon,
    },
    {
      name: 'Finance',
      icon: FinanceIcon,
    },
  ];

  return (
    <div className="colorpage-container services-section">
      <h2 className="section-title services-section-title">{content.title}</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-round-icon-container">
              <img src={service.icon} alt={service.name} />
            </div>
            <p className="service-name">{service.name}</p>
          </div>
        ))}
      </div>
      <div className="loved-section card">
        <img src={Heart} alt="Heart" />
        <p>Loved by 6000+ users across the globe</p>
      </div>
    </div>
  );
};

export default Services;
