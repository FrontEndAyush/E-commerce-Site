import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <div className="container text-center py-5">
        <h1 className="text-3xl font-black">Choose Payment Option.</h1>

        {/* first  */}
        <div className="mt-4">
          <input type="checkbox" name="" id="online_pay" className="mt-1" />
          <label htmlFor="online_pay " className="ml-2 text-xl ">
            Online UPI ID/Paytm/Google Pay
          </label>
        </div>

        {/* second  */}
        <div className="mt-4">
          <input type="checkbox" name="" id="cards" className="mt-1" />
          <label htmlFor="cards " className="ml-2 text-xl ">
            Add Debit/Credit/ATM Card
          </label>
        </div>

        {/* third  */}
        <div className="mt-4">
          <input type="checkbox" name="" id="shopCoUpi" className="mt-1" />
          <label htmlFor="shopCoUpi" className="ml-2 text-xl ">
            Pay With Shop.Co UPI
          </label>
        </div>

        {/* fourth  */}
        <div className="mt-4">
          <input type="checkbox" name="" id="delivery" className="mt-1" />
          <label htmlFor="delivery " className="ml-2 text-xl ">
            Pay On Delivery
          </label>
        </div>

        {/* fifth */}
        <div className="w-[300px] mx-auto">
          <Link to={"/address/select_address/payments/order_confirmation"}>
            <button
              type="submit"
              class="flex w-2/2  relative left-[60px] mt-5 justify-center rounded-md bg-indigo-600 px-20 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Purchase
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
