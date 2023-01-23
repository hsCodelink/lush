import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const ProductCard = ({
  content: { image, title, oldPrice, discountPrice },
  cart,
}) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className={style.mainCard}>
      <div className={style.imageWrapper}>
        <img src={image} />
        <div className={style.favIconWrapper}>
          {favorite ? (
            <MdOutlineFavoriteBorder
              onClick={() => {
                setFavorite((prev) => !prev);
              }}
              style={{
                fontSize: "25px",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
              }}
              className={style.favIcon}
            />
          ) : (
            <MdOutlineFavorite
            onClick={() => {
              setFavorite((prev) => !prev);
            }}
              color="#337A5B"
              style={{
                fontSize: "25px",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
              }}
            />
          )}
        </div>
      </div>
      <div className={style.cardContent}>
        <div className={style.leftContent}>
          <div className={style.imageTitle}>
            <h6>{title}</h6>
          </div>
          <div className={style.priceSection}>
            <div className={style.oldPrice}>
              <span>{oldPrice}</span>
            </div>
            <div className={style.discountPrice}>
              <span>{discountPrice}</span>
            </div>
          </div>
        </div>
        <div className={style.rightContent}>
          <button
            className={style.buyButton}
            onClick={() => {
              cart();
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
