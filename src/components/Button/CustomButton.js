import React from "react";

import "../Button/CustomButton.css";
export default function CustomButton({ style, children }) {
  const handleClick = () => {
    console.log("Do Something");
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
