import React from "react";
import { Tabs, ConfigProvider } from "antd";
export default function TabScreen({
  upperImage,
  lowerImage,
  title,
  titleColor,
  backgroundColor,
  items
}) {
 
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor: "black",
            itemSelectedColor: 'black',
            itemColor: '#666',
            itemHoverColor: 'black'
          },
        },
      }}
    >
      <div
        className="screenshot-screen-container"
        style={{
          backgroundColor: backgroundColor || "#ffffff",
        }}
      >
        <div className="title-container-screenshot">
          {upperImage && (
            <img className="title-image" src={upperImage} alt="Upper"></img>
          )}
          <h6 className="page-title" style={{ color: titleColor || "#000000" }}>
            {title}
          </h6>
          {lowerImage && (
            <img className="title-image" src={lowerImage} alt="Lower"></img>
          )}
        </div>
        <div className="highlight-center-f" style={{ width: "80vw" }}>
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
    </ConfigProvider>
  );
}
