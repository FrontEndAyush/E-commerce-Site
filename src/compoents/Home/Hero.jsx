import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="">
      <div className="container mx-auto  relative flex flex-wrap">
        {/* for texts  */}
        <div className=" relative lg:absolute pl-5 pt-5">
          <h1 className="font-black  text-7xl mb-4">
            FIND <span className="text-[17vw] md:text-7xl">CLOTHES</span>{" "}
          </h1>
          <h1 className="font-black  text-7xl mb-4 ">
            THAT <span className="text-[17vw] leading-1  md:text-7xl">MATCHES</span>
          </h1>
          <h1 className="font-black tracking-normal leading-[64px]  text-7xl mb-4">
            YOUR STYLE
          </h1>

          <p
            className="mt-5 w-full lg:w-1/2
          "
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Link
            to={"/shop"}
            className="rounded-full relative top-4 left-0 bg-black text-white py-3 px-10 mt-10"
          >
            Shop Now
          </Link>

          {/* info */}
          <div className="flex gap-5 mt-8">
            <div>
              <h1 className="font-bold  text-2xl lg:text-4xl ">200+</h1>
              <p className="text-[12px] lg:text-xl">International Brands</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl lg:text-4xl">2,000+</h1>
              <p className="text-[12px] lg:text-xl">High Quality Products</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl lg:text-4xl">30,000+</h1>
              <p className="text-[12px] lg:text-xl">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* for banner  */}
        <div className="container">
          <img
            src="/banner/Vector.png"
            className="absolute hidden lg:block right-10 top-8"
            alt=""
          />
          <img
            src="/banner/Vector.png"
            className="absolute right-[400px]  hidden lg:block top-20"
            alt=""
          />
          <img src="/banner/hero.png" className="hidden  lg:block" alt="" />
          <img
            src="/banner/hero2.png"
            className="bg-center mx-auto  lg:hidden  pt-5 pl-5 pr-5"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
