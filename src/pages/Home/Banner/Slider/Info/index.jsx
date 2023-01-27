import React from "react";
import style from "./Info.module.css";

const Info = ({ title, discription }) => {
  return (
    <div className={style.mainInfoSection}>
      <div className={style.title}>
        <h1>{title}</h1>
      </div>
      <div className={style.discription}>
        <p>{discription}</p>
      </div>
    </div>
  );
};

export default Info;
