import React from "react";
import "../CarouselScreen/ColorScreens.css";
export default function ColorScreens({
  backgroundColor,
  titleColor,
  title,
  imageSrc,
  children
}) {
  return (
    <div
      className="colorpage-container"
      style={{
        backgroundColor: backgroundColor || "#ffffff",
      }}
    >
      <h6 className="colorpage-title" style={{ color: titleColor || "#000000" }}>
        {title}
      </h6>
      <img className="colorpage-image" src={imageSrc} alt={title} />
      <div className="colorpage-text">
        {children}
      </div>
    </div>
  );
}
