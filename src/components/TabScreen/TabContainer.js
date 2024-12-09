import React from "react";
import TabCard from "./TabCard";
import "../TabScreen/TabContainer.css"

export default function TabContainer({ items }) {
  return (
    <div className="tab-container">
      {(items || []).map((e, index) => {
        return (
          <TabCard
            title={e}
            style={{ backgroundColor: index % 2 === 0 ? "#FFFFE3" : "#FEFFC7" }}
          />
        );
      })}
    </div>
  );
}
