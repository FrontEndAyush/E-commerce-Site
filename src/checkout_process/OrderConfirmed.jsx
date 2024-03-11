import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { counterDecrement } from "../Reducer/Reducer";
import { useDispatch } from "react-redux";

const OrderConfirmed = () => {
  let dispatch = useDispatch();
  const decrementCounter = () => {
    dispatch(counterDecrement(0));
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center mt-10">
          <FaRegCircleCheck className="text-green-500 mt-1 text-3xl" />
          <h1 className="text-green-500 ml-4 text-center text-3xl font-semibold">
            Order Confirmed
          </h1>
        </div>
        <p className="text-center text-xl font-bold mt-2">
          Confirmation will be sent to your Mobile Number{" "}
        </p>
        <p className="text-center text-xl font-bold mt-2">
          Thank You For Shopping With Us!✌{" "}
        </p>
        <div className="flex justify-center mt-3">
          <Link to={"/"}>
            <button
              className="border-2 px-2 mx-auto w-[300px] py-4 rounded-lg font-bold"
              onClick={decrementCounter}
            >
              Go Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
