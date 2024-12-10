import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Carousel/CarouselWrapper.css"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import { Pagination, Mousewheel } from "swiper/modules";

export default function CarouselWrapper({ children }) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Mousewheel]}
        mousewheel={true}
        direction="horizantal"
      >
        {(children || []).map((e, index) => {
          return <SwiperSlide key={index}>{e}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}
