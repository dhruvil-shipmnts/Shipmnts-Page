import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './CarouselWrapper.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Flex } from 'antd';

export default function CarouselWrapper({
  children,
  slidesPerView,
  customIconStyle,
  initialSlide,
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="carousel-container">
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        grabCursor={true}
        modules={[Navigation]}
        initialSlide={initialSlide ?? 0}
        breakpoints={{
          0: { slidesPerView: slidesPerView ?? 1 },
          768: { slidesPerView: slidesPerView ?? 2 },
        }}
      >
        {(children || []).map((e, index) => (
          <SwiperSlide key={index}>{e}</SwiperSlide>
        ))}
      </Swiper>
      <Flex justify="center" align="center" gap={10} style={customIconStyle ?? { marginTop: 20 }}>
        <button ref={prevRef} className="custom-navigation-button">
          <LeftOutlined />
        </button>
        <button ref={nextRef} className="custom-navigation-button">
          <RightOutlined />
        </button>
      </Flex>
    </div>
  );
}
