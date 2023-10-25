import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/effect-cube";

const FilmOfDay = () => {
  return (
    <div className="sw">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 30,
          shadowScale: 0.94,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCube]}
        className="swiper"
      >
        <SwiperSlide>
          <img
            className="img"
            src="https://www.studioghibli.fr/wp-content/uploads/2023/08/Le-garcon-et-le-heron-photo-8.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            src="https://www.studioghibli.fr/wp-content/uploads/2023/08/Le-garcon-et-le-heron-kimitachi-Ghibli.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            src="https://www.studioghibli.fr/wp-content/uploads/2023/08/Le-garcon-et-le-heron-photo-5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            src="https://www.studioghibli.fr/wp-content/uploads/2023/08/Le-garcon-et-le-heron-photo-6.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};


export default FilmOfDay;
