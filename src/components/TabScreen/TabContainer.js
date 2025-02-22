import React from 'react';
import TabCard from './TabCard';
import '../TabScreen/TabContainer.css';

export default function TabContainer({ items, colorHash }) {
  return (
    <div className="tab-content-container">
      {(items || []).map((item, index) => (
        <div
          key={index}
          className="card"
          style={{ backgroundColor: index % 2 === 0 ? colorHash.even : colorHash.odd }}
        >
          <TabCard index={index} activeItem={item} items={items} />
        </div>
      ))}
    </div>
  );
}
