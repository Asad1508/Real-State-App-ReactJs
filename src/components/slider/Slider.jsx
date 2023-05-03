import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Slider.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Slider = () => {
  return (
    <>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <Swiper {...sliderSettings}>
            <Sliderbuttons/>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span>{card.name}</span>
                  <span>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Slider;

const Sliderbuttons=()=>{
    const swiper=useSwiper()
    return(
        <div className="flexCenter r-button">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )

}
