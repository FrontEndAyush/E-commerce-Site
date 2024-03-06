import React from "react";
import { Hero } from "./Hero";
import CompanyLogo from "./CompanyLogo";
import NewArrivals from "./NewArrivals";
import TopSelling from "./TopSelling";
import DressStyles from "./DressStyles";
import Comments from "./Comments";
import Shop from "../Shop";

const asda = () => {
  return (
    <>
      <Hero></Hero>
      <CompanyLogo></CompanyLogo>
      <Shop></Shop>
      <NewArrivals></NewArrivals>
      <TopSelling></TopSelling>
      <DressStyles></DressStyles>
      <Comments></Comments>
    </>
  );
};

export default asda;
