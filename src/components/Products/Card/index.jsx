import React, { useContext, useEffect, useState } from "react";
import style from "./Card.module.css";
import {
  MdOutlineFavoriteBorder as FavBorderIcon,
  MdOutlineFavorite as FavIcon,
} from "react-icons/md";
import { cartContext } from "../../../App";

const ProductCard = ({
  image: img,
  title,
  oldPrice,
  discountPrice,
  itemClick,
  itemUnClick,
  id,
}) => {
  const [favorite, setFavorite] = useState(false);
  const [state] = useContext(cartContext);

  const idCheck = state.some((item) => item.id == id);

  return (
    <div className={style.mainCard}>
      <div className={style.imageWrapper}>
        <img src={img} />
        <div className={style.favIconWrapper}>
          {favorite ? (
            <FavIcon
              color="#337A5B"
              onClick={() => {
                setFavorite((prev) => !prev);
              }}
              style={{
                fontSize: "25px",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
              }}
            />
          ) : (
            <FavBorderIcon
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
          )}
        </div>
      </div>
      <div className={style.cardContent}>
        <div className={style.leftContent}>
          <h6>{title}</h6>
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
            className={idCheck ? style.buyRemoveButton : style.buyButton}
            onClick={
              idCheck
                ? () => {
                    itemUnClick();
                  }
                : () => {
                    itemClick();
                  }
            }
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
