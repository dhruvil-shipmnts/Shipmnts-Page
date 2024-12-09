import React from "react";
import "../Button/CustomButton.css";
export default function CustomButton({ style, children,link }) {
  const handleClick = () => {
    window.location.href = link;
  };
  return (
    <button className="custom-button" style={style} onClick={handleClick}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </button>
  );
}
