import React from "react";
import { Images } from "../../shared";
import style from "./Banner.module.css";
import Slider from "./Slider";
import { FaRegPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className={style.mainBannerSection}>
      <div className={style.bannerWrapper}>
        <img src={Images.bannerImage} />
      </div>
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
  );
};

export default Banner;
