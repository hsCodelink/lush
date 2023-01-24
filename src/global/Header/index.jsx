import React, { useContext } from "react";
import { Images } from "../../pages/shared";
import style from "./Header.module.css";
import { GiShoppingCart } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { cartContext } from "../../App";

const Header = ({ totalItems }) => {
  const [state, dispatch] = useContext(cartContext);
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
                      {totalItems}
                    </a>
                  </li>
                  <li>
                    <a href="#">{state.discountPrice}</a>
                  </li>
                </ul>
              </div>
              <div className={style.button}>
                <button className="borderButton">Call Us</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
