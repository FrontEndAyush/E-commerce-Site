import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, json } from "react-router-dom";
import { getfilteredData } from "../Reducer/Reducer";
import { useDispatch } from "react-redux";

import { ShimmerUIThumbnail } from "shimmer-ui-effect";
import { ShimmerUIButton } from "shimmer-ui-effect";

const Shop = () => {
  let productItems = localStorage.getItem("productItems");
  let dispatch = useDispatch();
  let filteredData = useSelector((state) => state.counterSlice.filteredData);

  let isTrue = useSelector((state) => state.counterSlice.isTrue);

  const sortByCategory = (item) => {
    console.log("heelo");
    let filter = filteredData.filter(
      (product) => product.category == item
    );
    dispatch(getfilteredData(filter));
    console.log("heeloaaa");
  };
  const onPriceChange = (value) => {
    let filter = JSON.parse(productItems).filter(
      (product) => product.price > value
    );
    dispatch(getfilteredData(filter));
  };

  return (
    <div>
      <h1 className="text-center mt-14  lg:block text-5xl  font-extrabold">
        Top Products
      </h1>
      {isTrue === true ? (
        <>
          <div className="flex justify-center mt-16  ">
            {/* for shimmer effect you have to install npm js shimmer effect plugin */}
            <div className="flex flex-col relative right-14">
              <ShimmerUIThumbnail height={200} width={200} rounded />
              <div className="flex flex-col relative top-30">
                <ShimmerUIButton borderRadius={2} height={15} width={150} />
                <ShimmerUIButton borderRadius={2} height={15} width={100} />
                <ShimmerUIButton borderRadius={2} height={15} width={100} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container flex mx-auto">
          {/* sidebar */}
          <div className=" lg:block mt-20  border-r-2 mr-0 lg:mr-2 p-3 ">
            <div>
              <h1 className="text-2xl capitalize font-semibold ">Category</h1>
              <ul className="mt-3 ">
                <li
                  className="mt-1  cursor-pointer"
                  onClick={(e) =>
                    sortByCategory(e.target.innerText, e.target.value)
                  }
                >
                  men's clothing
                </li>
                <li
                  className="mt-1 cursor-pointer text-[14px]"
                  onClick={(e) => sortByCategory(e.target.innerText)}
                >
                  women's clothing
                </li>
                <li
                  className="mt-1 cursor-pointer"
                  onClick={(e) => sortByCategory(e.target.innerText)}
                >
                  electronics
                </li>
                <li
                  className="mt-1 cursor-pointer"
                  onClick={(e) => sortByCategory(e.target.innerText)}
                >
                  jewelery
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl capitalize font-semibold mt-7  ">
                Choose{" "}
              </h1>
              <select
                name=""
                id=""
                className="mt-5"
                onChange={(e) => onPriceChange(e.target.value)}
              >
                <option value="7">$7 above</option>
                <option value="50">$50 above</option>
                <option value="100">$100 above</option>
                <option value="200">$200 above</option>
              </select>
            </div>
          </div>

          {/* products */}
          <div>
            <section className="text-gray-600 body-font">
              <div className="container px-2 lg:px-2 py-10 mx-auto">
                <div className="flex flex-wrap justify-center -m-4 ">
                  {filteredData.map((product) => (
                    <Link
                      key={product.id}
                      to={`/shop/${product.id}`}
                      className="lg:w-1/4 h-full md:w-2/2  p-8 lg:p-16  w-full  flex justify-center flex-col"
                    >
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-[150px]  h-full block"
                          src={product.image}
                        />
                      </a>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {product.category}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {product.title}
                        </h2>
                        <p className="mt-3">${product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
