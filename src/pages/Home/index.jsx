import React from "react";
import Blogs from "../../components/Blogs";
import Products from "../../components/Products";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <Blogs />
    </>
  );
};

export default Home;
