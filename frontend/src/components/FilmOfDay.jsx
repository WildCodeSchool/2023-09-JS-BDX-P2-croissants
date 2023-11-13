import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper/modules";
import { FilterContext } from "../context/FilterContext";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/effect-cube";

function FilmOfDay() {
  const { searchTerm } = useContext(FilterContext);
  return (
    <div className={searchTerm !== "" ? "invisible" : "sw"}>
      <Swiper
        effect="cube"
        grabCursor
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
        navigation
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
        <SwiperSlide>
          <img
            className="img"
            src="https://www.studioghibli.fr/wp-content/uploads/2023/10/garcon-et-le-heron-bande-annonce-francaise.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            src="https://www.studioghibli.fr/wp-content/uploads/2023/10/affiche-garcon-et-heron.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FilmOfDay;
