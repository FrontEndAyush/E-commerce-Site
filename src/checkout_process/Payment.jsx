import React, { useRef, useState } from "react";

import { counter } from "../Reducer/Reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [isTrue, setIsTrue] = useState(null);
  let onlinePayment = useRef();
  let cashOnDelivery = useRef();
  let useDebitCard = useRef();
  let payWithShopCo = useRef();
  const increamentCounter = () => {
    dispatch(counter());
  };

  const isSelected = () => {
    console.log("working");
    if (
      onlinePayment.current.value === isTrue ||
      cashOnDelivery.current.value === isTrue ||
      useDebitCard.current.value === isTrue ||
      payWithShopCo.current.value === isTrue
    ) {
      dispatch(counter());
      navigate("/address/select_address/payments/order_confirmation");
    } else alert("please select a option.");
  };

  const handleIsTrue = (value) => {
    setIsTrue(value);
  };
  return (
    <div>
      <div className="container text-center py-5">
        <h1 className="text-3xl font-black">Choose Payment Option.</h1>

        {/* first  */}
        <div className="mt-4">
          <input
            type="radio"
            name=""
            id="online_pay"
            value="opt1"
            ref={onlinePayment}
            checked={isTrue === "opt1"}
            onChange={(event) => handleIsTrue(event.target.value)}
            className="mt-1"
          />
          <label htmlFor="online_pay " className="ml-2 text-xl ">
            Online UPI ID/Paytm/Google Pay
          </label>
        </div>

        {/* second  */}
        <div className="mt-4">
          <input
            type="radio"
            name=""
            id="cards"
            value="opt2"
            ref={useDebitCard}
            checked={isTrue === "opt2"}
            onChange={(event) => handleIsTrue(event.target.value)}
            className="mt-1"
          />
          <label htmlFor="cards " className="ml-2 text-xl ">
            Add Debit/Credit/ATM Card
          </label>
        </div>

        {/* third  */}
        <div className="mt-4">
          <input
            type="radio"
            name=""
            ref={payWithShopCo}
            id="shopCoUpi"
            value={"opt3"}
            checked={isTrue === "opt3"}
            onChange={(event) => handleIsTrue(event.target.value)}
            className="mt-1"
          />
          <label htmlFor="shopCoUpi" className="ml-2 text-xl ">
            Pay With Shop.Co UPI
          </label>
        </div>

        {/* fourth  */}
        <div className="mt-4">
          <input
            type="radio"
            name=""
            value="opt4"
            ref={cashOnDelivery}
            checked={isTrue === "opt4"}
            onChange={(event) => handleIsTrue(event.target.value)}
            id="delivery"
            className="mt-1"
          />
          <label htmlFor="delivery " className="ml-2 text-xl ">
            Pay On Delivery
          </label>
        </div>

        {/* fifth */}
        <div className="w-[300px] mx-auto">
          <button
            onClick={() => isSelected()}
            type="submit"
            class="flex w-2/2  relative left-[60px] mt-5 justify-center rounded-md bg-indigo-600 px-20 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
