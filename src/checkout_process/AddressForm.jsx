import React from "react";
import { Link } from "react-router-dom";
import { counter } from "../Reducer/Reducer";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const AddressForm = () => {
  let name = useRef();
  let address = useRef();
  let phoneNum = useRef();
  let city = useRef();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleSubmit = () => {
    if (
      name.current.value !== "" &&
      address.current.value !== "" &&
      city.current.value !== "" &&
      phoneNum.current.value !== "" &&
      !isNaN(phoneNum.current.value) &&
      phoneNum.current.value.length === 10
    ) {
      dispatch(counter());
      navigate("/address/select_address");
    } else {
      alert("Please fill the info Correctly.");
    }
  };

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py- lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add Your Location
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          {/* First  */}
          <div>
            <label
              for="text"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div class="mt-2">
              <input
                id="text"
                ref={name}
                name="text"
                type="text"
                autoComplete="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>

          {/* second  */}
          <div>
            <label
              for="text"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div class="mt-2">
              <input
                id="text"
                name="text"
                type="text"
                ref={address}
                autoComplete="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>

          {/* third */}
          <div>
            <label
              for="text"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Mobile Number
            </label>
            <div class="mt-2">
              <input
                id="text"
                ref={phoneNum}
                name="text"
                type="text"
                autoComplete="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>

          {/* fourth */}
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
            </div>
            <div class="mt-2">
              <input
                id="text"
                name="text"
                type="text"
                ref={city}
                autoComplete="current-text"
                required
                class="block w-full mb-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>

          {/* fifth for button */}
          <Link>
            <button
              type="submit"
              // onClick={increamentCounter}
              onClick={handleSubmit}
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
