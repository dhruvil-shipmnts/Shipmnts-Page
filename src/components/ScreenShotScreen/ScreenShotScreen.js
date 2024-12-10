import React from "react";
import ScreenShotLoader from "./ScreenShotLoader";
import CarouselWrapper from "../Carousel/CarouselWrapper";
import "../ScreenShotScreen/ScreenShotScreen.css";
export default function ScreenShotScreen({
  backgroundColor,
  titleColor,
  title,
  upperImage,
  lowerImage,
  images,
}) {
  return (
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
        <h6 className="screenshot-screen-title" style={{ color: titleColor || "#000000" }}>
          {title}
        </h6>
        {lowerImage && (
          <img className="title-image" src={lowerImage} alt="Lower"></img>
        )}
      </div>
      <div className="highlight-center-f">
        <CarouselWrapper>
          {(images || []).map((e, index) => {
            return <ScreenShotLoader key={index} {...e} />;
          })}
        </CarouselWrapper>
      </div>
    </div>
  );
}
