import React from "react";
import "../CarouselScreen/CarouselScreenWrapper.css"
export default function ({
  backgroundColor,
  titleColor,
  title,
  imageSrc,
  children,
}) {
  return (
    <div
      className="page-container"
      style={{
        backgroundColor: backgroundColor || "#ffffff",
      }}
    >
      <h6 className="page-title" style={{ color: titleColor || "#000000" }}>
        {title}
      </h6>
      <img className="page-image" src={imageSrc} alt={title} />
      {children}
    </div>
  );
}
