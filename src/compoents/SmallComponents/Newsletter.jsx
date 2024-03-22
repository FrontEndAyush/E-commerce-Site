import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="lg:py-16 py-4">
        <div className="container w-[90vw] p-5  lg:w-full mx-auto  py-20 rounded-3xl flex  lg:justify-around justify-center  flex-wrap  bg-black">
          {/* first div for text */}
          <div>
            <h1 className="text-white text-2xl text-center lg:text-4xl mb-2 font-extrabold">
              STAY UPTO DATE ABOUT{" "}
            </h1>
            <h1 className="text-white text-2xl lg:text-4xl mb-3 text-center font-extrabold">
              OUR LATEST OFFERS
            </h1>
          </div>

          {/* second for email  */}
          <div className="flex flex-col">
            <input
              type="email"
              name=""
              id=""
              className="mb-4 lg:px-20 px-5 rounded-full py-2"
              placeholder="Enter Your Email"
            />
            <button className="lg:px-20 px-5 rounded-full py-2 bg-white text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
