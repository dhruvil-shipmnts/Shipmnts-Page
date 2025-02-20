import React from 'react';
import TabCard from './TabCard';
import '../TabScreen/TabContainer.css';
import { Col, Row } from 'antd';

export default function TabContainer({ items }) {
  return (
    <Row className="tab-content-container" gutter={[16, 16]}>
      {(items || []).map((item, index) => {
        return (
          <Col lg={8} sm={24} key={index} style={{ width: '100%' }}>
            <TabCard
              index={index}
              activeItem={item}
              items={items}
              style={{ backgroundColor: index % 2 === 0 ? '#FFFFE3' : '#FEFFC7' }}
            />
          </Col>
        );
      })}
    </Row>
  );
}
