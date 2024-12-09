import React from "react";
import { Carousel } from "antd";
function CarouselWrapper({children}) {
  console.log("This is children", children)
  return (
    <>
      <Carousel arrows={true} infinite={false} dots={true}>
        {children}
      </Carousel>
    </>
  );
}

export default CarouselWrapper;
