import React from "react";
import { blogDetails } from "../../pages/shared";
import Card from "./Card";
import style from "./Blogs.module.css";

const Blogs = () => {
  return (
    <section>
      <div className={style.mainBlogSection}>
        <div className="container">
          <div className={style.topHeading}>
            <h2>Interesting blog to read</h2>
          </div>
          <div className={style.mainBlogCard}>
            {blogDetails.map((item, index) => {
              return <Card {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
