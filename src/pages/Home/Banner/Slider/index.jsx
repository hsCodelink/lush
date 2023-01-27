import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { sliderContent } from "../../../shared";
import Info from "./Info";
import style from "./Slider.module.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderSetting = {
    items: 1,
    loop: true,
    startPosition: currentIndex,
    dots: false,
  };

  return (
    <section>
      <div className="container">
        <OwlCarousel
          className="owl-theme"
          {...sliderSetting}
          id={style.owlCarousel}
        >
          {sliderContent.map((item, index) => {
            return <Info {...item} key={index} />;
          })}
        </OwlCarousel>
      </div>
      <div className={style.buttonGroup}>
        <button
          className={currentIndex === 0 && style.active}
          onClick={() => {
            setCurrentIndex(0);
          }}
        >
          01
        </button>
        <button
          className={currentIndex === 1 && style.active}
          onClick={() => {
            setCurrentIndex(1);
          }}
        >
          02
        </button>
        <button
          className={currentIndex === 2 && style.active}
          onClick={() => {
            setCurrentIndex(2);
          }}
        >
          03
        </button>
      </div>
    </section>
  );
};

export default Slider;
