import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../Reducer/Reducer";

import { incrementByAmount } from "../Reducer/Reducer";
import { getFilteredId } from "../Reducer/Reducer";
import { Link } from "react-router-dom";
import { counter } from "../Reducer/Reducer";

const Cart = () => {
  let [filteredData, setFilteredData] = useState([]);

  let productItems = JSON.parse(localStorage.getItem("productItems")) || [];

  let dispatch = useDispatch();

  let price = useSelector((state) => state.counterSlice.price);

  let products = useSelector((state) => state.counterSlice.product);
  let productsIds = localStorage.getItem("Ids");

  let parsedProductId = JSON.parse(productsIds) || [];
  useEffect(() => {
    let filter = productItems.filter((product) =>
      parsedProductId.includes(product.id)
    );
    setFilteredData(filter);
  }, []);

  useEffect(() => {
    const showMeTheValue = () => {
      let productPrice = products.filter((product) =>
        parsedProductId.includes(product.id) ? product.price : ""
      );
      let sum = productPrice.reduce(
        (sum, productPrice) => sum + productPrice.price,
        0
      );
      let usedToFixWithSum = sum.toFixed(2);

      dispatch(incrementByAmount(usedToFixWithSum));
    };
    showMeTheValue();
  }, []);

  // when someone click on remove button
  const removeProductFromCart = (productId) => {
    dispatch(decrement());
    let filterTheId = parsedProductId.filter((id) => id !== productId);
    let filter = productItems.filter((product) =>
      filterTheId.includes(product.id)
    );
    dispatch(getFilteredId(filterTheId));
    setFilteredData(filter);
  };

  const increamentCounter = () => {
    dispatch(counter());
  };

  return (
    <div className="">
      {filteredData.length == 0 ? (
        <div className="container mx-auto text-center font-black text-5xl py-20">
          <h1>Nothing in the Cart!😥</h1>
        </div>
      ) : (
        <>
          {filteredData.map((product) => (
            <div
              key={product.id}
              className="container mx-auto  lg:py-20 mb-5 py-5 my-auto gap-5 border-2 rounded-lg p-5"
            >
              <div className="flex justify-between gap-10 flex-wrap p-5 lg:flex-nowrap">
                {/* first  */}
                <div className="border-2 p-5 rounded-xl w-[300px]  ">
                  <img src={product.image} alt="" className="w-[300px]" />
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
