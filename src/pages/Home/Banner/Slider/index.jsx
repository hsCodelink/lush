import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { sliderContent } from "../../../shared";
import Info from "./Info";
import style from "./Slider.module.css";

const sliderSetting = {
  items: 1,
  loop: true,
};

const Slider = () => {
  return (
    <section>
      <div className="container">
        <OwlCarousel className="owl-theme" {...sliderSetting}>
          {sliderContent.map((item, index) => {
            return <Info content={item} key={index} />;
          })}
        </OwlCarousel>
      </div>
      <div className={style.buttonGroup}>
        <button>01</button>
        <button>02</button>
        <button>03</button> 
      </div>
    </section>
  );
};

export default Slider;
