import React from "react";
import TabCard from "./TabCard";
import "../TabScreen/TabContainer.css"

export default function TabContainer({ items }) {
  const {titles, paragraphs, images} = items;
  return (
    <div className="tab-container">
      {(titles || []).map((e, index) => {
        return (
          <TabCard
            index={index}
            titles={titles}
            paragraphs={paragraphs}
            images={images}
            style={{ backgroundColor: index % 2 === 0 ? "#FFFFE3" : "#FEFFC7" }}
          />
        );
      })}
    </div>
  );
}
