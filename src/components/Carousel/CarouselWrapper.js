import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Carousel/CarouselWrapper.css"
function CarouselWrapper({ children }) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1200,
    cssEase: "linear",
    infinite: true,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          textAlign: 'left',
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default CarouselWrapper;
