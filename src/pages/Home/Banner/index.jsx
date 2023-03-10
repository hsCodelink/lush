import React from "react";
import style from "./Banner.module.css";
import Slider from "./Slider";
import { FaRegPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className={style.mainBannerSection}>
      <div className={style.bannerWrapper}>
        <div className={style.sliderWrapper}>
          <Slider />
          <div className={style.buttonGroup}>
            <button className="backgroundButton">Book Now</button>
            <button className="borderButton">
              <FaRegPlayCircle className={style.playIcon} />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
