import React from "react";
import { Carousel } from "antd";
function CarouselWrapper({children, style}) {
  console.log("This are props", children);
  return (
    <>
      <Carousel style={style} arrows={true} infinite={false} dots={true}>
        {children}
      </Carousel>
    </>
  );
}

export default CarouselWrapper;
