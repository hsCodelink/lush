import React from "react";
import style from "./Card.module.css";
import { MdOutlineDateRange as DateIcon } from "react-icons/md";
import { BsArrowRightShort as RightArrow } from "react-icons/bs";

const Card = ({ image, title, discription, date }) => {
  return (
    <div className={style.mainBlogCard}>
      <div className={style.imgWrapper}>
        <img src={image} />
      </div>
      <div className={style.imageContent}>
        <div className={style.title}>
          <h6>{title}</h6>
        </div>
        <div className={style.discription}>
          <p>{discription}</p>
        </div>
        <div className={style.cardLastSection}>
          <div className={style.dateSection}>
            <DateIcon className={style.dateIcon} />
            <div className={style.blogDate}>
              <span>{date}</span>
            </div>
          </div>
          <div className={style.readMoreLink}>
            <a href="#">Read More</a>
            <RightArrow className={style.rightArrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
