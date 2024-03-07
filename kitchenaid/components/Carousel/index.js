import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Carousel = ({
  spaceBetween,
  slidesPerView,
  onSlideChange,
  onSwiper,
  modules,
  items,
}) => {
  const renderItems = () => {
    return (
      <>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Imagen 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Imagen 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Imagen 1"
          />
        </SwiperSlide>
      </>
    );
  };
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange
      onSwiper={(swiper) => <></>}
      pagination={true}
      modules={[Pagination]}
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
    >
      {renderItems()}
    </Swiper>
  );
};
export default Carousel;
