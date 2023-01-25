import React, { useState, useEffect, useContext } from "react";
import { cart, cartContext } from "../../App";
import { productDetails } from "../../pages/shared";
import ProductCard from "./Card";
import style from "./Products.module.css";

const Products = () => {
  const [state, dispatch] = useContext(cartContext);

  return (
    <div className="container">
      <div className={style.mainProductSection}>
        <div className={style.topHeading}>
          <h2>What we offer to you</h2>
        </div>
        <div className={style.productCardSection}>
          {productDetails.map((cardItem, index) => {
            return (
              <ProductCard
                content={cardItem}
                key={index}
                id={cardItem.id}
                itemClick={() =>
                  dispatch({
                    type: "Buy_Now_Increment",
                    payload: {
                      id: cardItem.id,
                      discountPrice: cardItem.discountPrice,
                    },
                  })
                }
                itemUnClick={() =>
                  dispatch({
                    type: "Buy_Now_decrement",
                    payload: {
                      id: cardItem.id,
                      discountPrice: cardItem.discountPrice,
                    },
                  })
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
