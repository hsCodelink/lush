import React from "react";
import style from "./Footer.module.css";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { Images } from "../../pages/shared";

const Footer = () => {
  return (
    <footer>
      <div className={style.footerBg}>
        <div className="container">
          <div className={style.mainFooterSection}>
            <div className={style.imgWrapperLeft}>
              <img src={Images.footer_bg_1} />
            </div>
            <div className={style.imgWrapperRight}>
              <img src={Images.footer_bg_2} />
            </div>
            <div className={style.heading}>
              <h4>Feel free to contact us</h4>
            </div>
            <div className={style.socialIconWrapper}>
              <div className={style.socialIcon}>
                <a href="#">
                  <FiInstagram className={style.instagram} />
                </a>
              </div>
              <div className={style.socialIcon}>
                <a href="#">
                  <FiFacebook className={style.facebook} />
                </a>
              </div>
              <div className={style.socialIcon}>
                <a href="#">
                  <FiTwitter className={style.twitter} />
                </a>
              </div>
            </div>
            <div className={style.menubar}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Plants</a>
                </li>
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.copyRightSection}>
        <div className="container">
          <div className={style.copyRightContent}>
            <p>Copyright © 2021 Lush. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
