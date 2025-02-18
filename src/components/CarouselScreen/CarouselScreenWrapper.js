import React from 'react';
import '../CarouselScreen/CarouselScreenWrapper.css';
export default function CarouselScreenWrapper({ backgroundColor, titleColor, title, imageSrc }) {
  return (
    <div
      className="page-container"
      style={{
        backgroundColor: backgroundColor || '#ffffff',
      }}
    >
      <h6 className="page-title" style={{ color: titleColor || '#000000' }}>
        {title}
      </h6>
      <img className="page-image" src={imageSrc} alt={title} />
    </div>
  );
}
