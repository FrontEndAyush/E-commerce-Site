import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFilterDataByCategory } from "../Reducer/Reducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const WomenClothings = () => {
  let productItems = JSON.parse(localStorage.getItem("productItems")) || [];
  let dispatch = useDispatch();

  let filteredDataByCategory = useSelector(
    (state) => state.counterSlice.filteredDataByCategory
  );
  useEffect(() => {
    let filter = productItems.filter(
      (product) => product.category === "women's clothing"
    );
    dispatch(getFilterDataByCategory(filter));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-24 lg:px-5 py-24 mx-auto">
        <div className="flex flex-wrap  justify-center -m-4">
          {filteredDataByCategory.map((product) => (
            <Link
              to={`/shop/${product.id}`}
              key={product.id}
              className="lg:w-1/4 md:w-1/2 p-4 w-full mt-5"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[150px] h-full block"
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
                <p className="mt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomenClothings;
