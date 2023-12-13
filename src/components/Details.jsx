import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Details = ({ p }) => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {/* {p?.images((m, i) => (
            <SwiperSlide>p?.images[i]</SwiperSlide>
          ))} */}
        <SwiperSlide>{p?.images[1]}</SwiperSlide>
        <SwiperSlide>{p?.images[2]}</SwiperSlide>
      </Swiper>
      <div className="mt-5"> {p?.Title}</div>
      <div> {p?.description}</div>
    </div>
  );
};

export default Details;
