import React, { useContext } from "react";
import { Images } from "../../pages/shared";
import style from "./Header.module.css";
import { GiShoppingCart } from "react-icons/gi";
import { cartContext } from "../../App";

const Header = () => {
  const [state] = useContext(cartContext);

  let total = state.reduce(function (prev, current) {
    return prev + +current.discountPrice;
  }, 0);
  
  return (
    <header className={style.headerBackground}>
      <nav>
        <div className="container">
          <div className={style.navWrapper}>
            <div className={style.logoSection}>
              <img src={Images.logoImage} />
            </div>
            <div className={style.rightNavSection}>
              <div className={style.navigation}>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Planters</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">
                      <GiShoppingCart style={{ fontSize: "20px" }} />
                      {state.length > 0 ? state.length : 0}
                    </a>
                  </li>
                  <li>
                    <a href="#">{total}$</a>
                  </li>
                </ul>
              </div>
              <div className={style.button}>
                <a href="#"><button className="borderButton">Call Us</button></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
