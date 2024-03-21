import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { getfilteredData } from "../../Reducer/Reducer";
import { useDispatch } from "react-redux";

const Header = () => {
  let productsIds = localStorage.getItem("Ids");
  let parsedProductIdsLength = JSON.parse(productsIds) || [];
  let dispatch = useDispatch();
  let product = useSelector((state) => state.counterSlice.product);
  let navigate = useNavigate();

  let [hide, setHide] = useState("");
  let [showHamburger, setShowHamBurger] = useState(false);

  const hideTheDiscount = () => {
    setHide("hidden");
  };

  const setHamBurger = () => {
    setShowHamBurger((previousValue) => !previousValue);
  };

  const searchFunctionality = (value) => {
    navigate("/shop");

    let filter = product.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase().trim())
    );

    dispatch(getfilteredData(filter));
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
          <div
            className={` ${
              showHamburger === false ? "hidden" : "block"
            } lg:hidden `}
          >
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
              onChange={(e) => searchFunctionality(e.target.value)}
            />

            <CiSearch className="absolute top-2 left-4 text-xl hidden lg:block" />
          </div>

          {/* cart and favourties  */}
          <div className="flex text-2xl gap-3 ">
            <Link to={"/cart"}>
              <Badge
                badgeContent={parsedProductIdsLength.length}
                color="primary"
                className="relative bottom-2"
              >
                <FaShoppingCart />
              </Badge>
            </Link>
            <Link className="mr-4">
              <RiAdminFill />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
