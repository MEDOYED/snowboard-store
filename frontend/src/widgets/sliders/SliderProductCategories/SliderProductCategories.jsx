import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";

import dataProductCategories from "../../../shared/data/dataProductCategories";

import "./SliderProductCategories.scss";
import "swiper/css";

const SliderProductCategories = () => {
  return (
    <section className="slider-product-categories">
      <button className="prev-button">
        <FaChevronLeft />
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        slidesPerView={9}>
        {dataProductCategories.map((item, index) => (
          <SwiperSlide key={index} className="item">
            <img src={item.src} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="next-button">
        <FaChevronRight />
      </button>
    </section>
  );
};

export default SliderProductCategories;
