import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation } from "swiper/modules";
import Card from "../Card";

const Carousel = ({ title = "" }) => {
  return (
    <div className="swiper-backgroundimg">
      <h3 className="swiper-title" data-swiper-parallax="-300">
        {title}
      </h3>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-card">
            <Card src="/carousel-image1.png" />
            <p className="swiper-text" data-swiper-parallax="-100">
              Liebesapfelrot
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <Card src="/carousel-image2.png" />
            <p className="swiper-text" data-swiper-parallax="-100">
              Liebesapfelrot
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <Card src="/carousel-image3.png"/>
            <p className="swiper-text" data-swiper-parallax="-100">
              Liebesapfelrot
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <Card src="/carousel-image4.png" />
            <p className="swiper-text" data-swiper-parallax="-100">
              Liebesapfelrot
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

Carousel.propTypes = {
  title: PropTypes.string,
};

export default Carousel;
