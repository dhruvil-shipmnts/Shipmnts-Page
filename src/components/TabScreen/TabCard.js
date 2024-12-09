import React from "react";
import "../TabScreen/TabCard.css";

export default function TabCard({ title, style }) {
  return (
    <div className="tab-card" style={style}>
      <h2>{title}</h2>
    </div>
  );
}
