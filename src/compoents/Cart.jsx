import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../Reducer/Reducer";

import { incrementByAmount } from "../Reducer/Reducer";
import { getFilteredId } from "../Reducer/Reducer";
import { Link } from "react-router-dom";
import { counter } from "../Reducer/Reducer";

const Cart = () => {
  let ids = localStorage.getItem("Ids");
  let productItems = localStorage.getItem("productItems");

  let dispatch = useDispatch();
  let quantity = useRef();
  let price = useSelector((state) => state.counterSlice.price);
  let id = useSelector((state) => state.counterSlice.id);

  let products = useSelector((state) => state.counterSlice.product);
  let productsIds = localStorage.getItem("Ids");

  let filter = JSON.parse(productItems).filter((product) =>
    JSON.parse(productsIds).includes(product.id)
  );

  useEffect(() => {
    const showMeTheValue = () => {
      let productPrice = products.filter((product) =>
        JSON.parse(ids).includes(product.id) ? product.price : ""
      );
      let sum = productPrice.reduce(
        (sum, productPrice) => sum + productPrice.price,
        0
      );

      dispatch(incrementByAmount(sum));
    };
    showMeTheValue();
  }, []);

  // when someone click on remove button
  const removeProductFromCart = (productId) => {
    dispatch(decrement());
    let filterTheId = JSON.parse(productsIds).filter((id) => id !== productId);
    dispatch(getFilteredId(filterTheId));
  };

  const increamentCounter = () => {
    dispatch(counter());
  };

  return (
    <div className="">
      {filter.length === 0 ? (
        <div className="container mx-auto text-center font-black text-5xl py-20">
          <h1>Nothing in the Cart!😥</h1>
        </div>
      ) : (
        <>
          {filter.map((product) => (
            <div
              key={product.id}
              className="container mx-auto  lg:py-20 mb-5 py-5 my-auto gap-5 border-2 rounded-lg p-5"
            >
              <div className="flex justify-between gap-10 flex-wrap p-5 lg:flex-nowrap">
                {/* first  */}
                <div className="border-2 p-5 rounded-xl w-[430px]  ">
                  <img src={product.image} alt="" className="size-60" />
                </div>

                {/* second */}
                <div className="mt-10 ">
                  <h1 className="text-3xl mb-5 font-semibold">
                    {product.title}
                  </h1>
                  <p className="capitalize mb-5">
                    {product.description.length > 99 &&
                      product.description.slice(0, 99) + "...."}
                  </p>
                  <input
                    type="number"
                    name=""
                    id={product.id}
                    defaultValue={1}
                    min={1}
                    max={5}
                    ref={quantity}
                    className="w-[50px] border-2  text-center"
                  />
                  <label htmlFor="num" className="">
                    {" "}
                    :Qty
                  </label>

                  <button
                    onClick={() => removeProductFromCart(product.id)}
                    className="py-2 px-3 lg:px-10 ml-5 bg-red-500 text-white cursor-pointer hover:bg-red-400 rounded "
                  >
                    Remove
                  </button>
                  <Link
                    onClick={increamentCounter}
                    to={"/address"}
                    className="py-2 px-3 lg:px-10 ml-5 bg-green-500 text-white cursor-pointer hover:bg-green-400 rounded "
                  >
                    Buy Now
                  </Link>
                </div>

                {/* third */}
                <div className="mt-10">
                  <h1 className="text-3xl font-extrabold">${product.price}</h1>
                </div>
              </div>
            </div>
          ))}
          {/* for price  */}
          <div className="text-right text-3xl font-bold container mt-3">
            <h1>Total: ${price}</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
