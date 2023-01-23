import React, { useState, useEffect } from "react";
import { productDetails } from "../../pages/shared";
import ProductCard from "./Card";
import style from "./Products.module.css";

const Products = () => {
  const [cart, setCart] = useState("");

  const carthandler = (id) => {
    console.log(id);
  };

  useEffect(() => {
    console.log("cart :", cart);
  }, [cart]);

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
                cart={() => {
                  carthandler(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
