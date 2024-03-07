// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// SwiperCore.use([Navigation, Pagination]);

// const Carousel = ({ spaceBetween, slidesPerView, onSlideChange, onSwiper }) => {
//   const renderItems = () => {
//     return (
//       <>
//         <SwiperSlide>
//           <img
//             src="https://swiperjs.com/demos/images/nature-1.jpg"
//             alt="Imagen 1"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://swiperjs.com/demos/images/nature-2.jpg"
//             alt="Imagen 2"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://swiperjs.com/demos/images/nature-3.jpg"
//             alt="Imagen 3"
//           />
//         </SwiperSlide>
//       </>
//     );
//   };

//   return (
//     <Swiper
//       spaceBetween={spaceBetween}
//       slidesPerView={slidesPerView}
//       onSlideChange={onSlideChange}
//       onSwiper={onSwiper}
//       navigation
//       pagination={{ clickable: true }}
//       breakpoints={{
//         340: {
//           slidesPerView: 1,
//           spaceBetween: 15,
//         },
//         768: {
//           slidesPerView: 1,
//           spaceBetween: 40,
//         },
//         992: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//       }}
//     >
//       {renderItems()}
//     </Swiper>
//   );
// };

// export default Carousel;
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="Imagen 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="Imagen 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="Imagen 3"
            />
          </SwiperSlide>
        </>
      </Swiper>
    </>
  );
}
