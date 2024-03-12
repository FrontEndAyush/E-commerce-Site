import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Address = () => {
  let counterNum = useSelector((state) => state.counterSlice.counter);
  return (
    <div className="">
      <div className="container mx-auto">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-20 mx-auto flex flex-wrap flex-col">
            <div class="hidden  lg:flex mx-auto flex-wrap -mb-2">
              <a
                className={`sm:px-6 py-3 w-1/2 sm:w-auto ${
                  counterNum === 1 &&
                  "border-indigo-500 text-indigo-500 bg-gray-100"
                } justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none tracking-wider rounded-t`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                STEP 1
              </a>
              <a
                class={`sm:px-6 ${
                  counterNum === 2 &&
                  "border-indigo-500 text-indigo-500 bg-gray-100"
                }  py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                STEP 2
              </a>
              <a
                class={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider ${
                  counterNum === 3 &&
                  "border-indigo-500 text-indigo-500 bg-gray-100"
                }`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
                STEP 3
              </a>
              <a
                class={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider ${
                  counterNum === 4 &&
                  "border-indigo-500 text-indigo-500 bg-gray-100"
                }`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                STEP 4
              </a>
            </div>

            {/* address form started */}
            <Outlet></Outlet>
            {/* address form ended */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Address;
