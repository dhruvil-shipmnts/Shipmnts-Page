import React from "react";
import TabCard from "./TabCard";
import "../TabScreen/TabContainer.css"

export default function TabContainer({ items }) {
  console.log("This sis items", items);
  return (
    <div className="tab-container">
      {(items || []).map((e, index) => {
        return (
          <TabCard
            title={e?.title}
            paragraphs={e?.paragraphs}
            images={e?.images}
            style={{ backgroundColor: index % 2 === 0 ? "#FFFFE3" : "#FEFFC7" }}
          />
        );
      })}
    </div>
  );
}
