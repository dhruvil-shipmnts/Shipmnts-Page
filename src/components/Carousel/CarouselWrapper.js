import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Carousel/CarouselWrapper.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

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
        modules={[Pagination]}
        mousewheel={true}
      >
        {(children || []).map((e, index) => {
          return <SwiperSlide key={index}>{e}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}
