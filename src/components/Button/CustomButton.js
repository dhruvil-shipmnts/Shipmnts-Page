import React from 'react';
import '../Button/CustomButton.css';
export default function CustomButton({ style, internalDivStyle, children, link }) {
  const handleClick = () => {
    window.location.href = link;
  };
  return (
    <button className="custom-button" style={style} onClick={handleClick}>
      <div className="custom-button-div" style={internalDivStyle}>
        {children}
      </div>
    </button>
  );
}
