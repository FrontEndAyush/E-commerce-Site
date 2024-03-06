import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const Header = () => {
  let counter = useSelector((state) => state.counterSlice.value);

  let [hide, setHide] = useState("");
  let [showHamburger, setShowHamBurger] = useState(false);

  const hideTheDiscount = () => {
    setHide("hidden");
  };

  const setHamBurger = () => {
    setShowHamBurger((previousValue) => !previousValue);
  };

  return (
    <>
      <header>
        {/* for the discount offer */}
        <div
          className={`w-full h-10 bg-black ${hide === "hidden" && "hidden"}`}
        >
          <div className="flex justify-center lg:justify-between align-middle pt-1 ">
            <div className="hidden lg:block"></div>
            <div className="text-white">
              <p className="text-center  text-[12px] mt-1 lg:text-[17px]">
                Sign up and get 20% off to your first order.{" "}
                <Link className="underline">Sign Up Now</Link>
              </p>
            </div>

            <RxCross2
              className="text-white cursor-pointer hidden lg:block text-2xl mr-5"
              onClick={hideTheDiscount}
            />
          </div>
        </div>

        {/* for the navbar */}
        <nav className="container mx-auto flex justify-between lg:py-3 py-2">
          {/* for logo */}
          <div className="flex gap-2">
            {/* hamburger menu */}
            {showHamburger === false ? (
              <IoMdMenu
                className=" text-2xl lg:hidden"
                onClick={setHamBurger}
              />
            ) : (
              <RxCross2
                className=" cursor-pointer  lg:hidden text-2xl "
                onClick={setHamBurger}
              />
            )}

            <Link to={"/"}>
              <img src="/logo/logo.png" alt="" />
            </Link>
          </div>

          {/* for tabs  */}
          <div className="hidden lg:block">
            <ul className="flex gap-5">
              <Link to={"/shop"}>Shop</Link>
              <Link to={"/mensclothings"}>Men's Clothing</Link>
              <Link to={"/womenclothings"}>Women's Clothing</Link>
              <Link to={"/jewelery"}>Jewelery</Link>
            </ul>
          </div>

          {/* for mobile devices only */}
          <div className={` ${showHamburger === false ? "hidden" : "block"} `}>
            <ul
              className={`flex  flex-col mt-10 justify-start bg-black w-full absolute z-10 left-0 text-white p-5 $ `}
            >
              <Link to={"/shop"}>Shop</Link>
              <Link to={"/mensclothings"}>Men's Clothing</Link>
              <Link to={"/womenclothings"}>Women's Clothing</Link>
              <Link to={"/jewelery"}>Jewelery</Link>
            </ul>
          </div>

          {/* for search  */}
          <div className="relative">
            <input
              type="search"
              name=""
              placeholder={"Search for Products..."}
              id=""
              className="border-2 w-[600px] rounded-full py-[5px] hidden lg:block pl-10"
            />

            <CiSearch className="absolute top-2 left-4 text-xl" />
          </div>

          {/* cart and favourties  */}
          <div className="flex text-2xl gap-2 ">
            <Link to={"/cart"}>
              <Badge
                badgeContent={counter}
                color="primary"
                className="relative bottom-2"
              >
                <FaShoppingCart />
              </Badge>
            </Link>
            <Link>
              <RiAdminFill />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
