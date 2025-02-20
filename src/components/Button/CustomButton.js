import React from 'react';
import '../Button/CustomButton.css';
export default function CustomButton({ style, internalDivStyle, children, link, className }) {
  const handleClick = () => {
    window.location.href = link;
  };
  return (
    <button className={`custom-button ${className}`} style={style} onClick={handleClick}>
      <div className="custom-button-div" style={internalDivStyle}>
        {children}
      </div>
    </button>
  );
}
