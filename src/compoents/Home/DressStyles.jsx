import React from "react";
import { Link } from "react-router-dom";

const DressStyles = () => {
  return (
    <div>
      <div className="container bg-[#ffffff] rounded-lg mx-auto lg:py-20 py-4">
        <h1 className="text-4xl font-extrabold text-center leading-0 mb-5">
          BROWSE MY DRESS STYLE
        </h1>

        {/* dress styles  */}
        <div className="mt-10">
          {/* first two dress styles */}
          <div className="flex justify-center gap-10 flex-wrap overflow-hidden">
            <div className="border-2 relative rounded-3xl">
              <h1 className="absolute text-4xl top-5 left-5 font-bold ">
                Casual
              </h1>
              <Link>
                <img
                  src="/dress_style/1.png"
                  className="w-[330px] overflow-x-hidden"
                  alt=""
                />
              </Link>
            </div>

            <div className="border-2 relative rounded-3xl lg:px-20">
              <h1 className="absolute text-4xl top-5 left-5  font-bold">
                Formal
              </h1>
              <Link>
                <img
                  src="/dress_style/2.png"
                  className="w-[330px] md:w-[500px] "
                  alt=""
                />
              </Link>
            </div>
          </div>

          {/* second two dress styles */}
          <div className="container mx-auto flex flex-wrap justify-center gap-5 mt-5">
            <div className="border-2 relative rounded-3xl lg:px-20">
              <h1 className="absolute text-4xl top-5 left-5 font-bold ">
                Party
              </h1>
              <Link>
                <img
                  src="/dress_style/3.png"
                  className="w-[330px] md:w-[550px]"
                  alt=""
                />
              </Link>
            </div>
            <div className="border-2 relative rounded-3xl">
              <h1 className="absolute text-4xl top-5 left-5 font-bold ">Gym</h1>
              <Link>
                <img
                  src="/dress_style/4.png"
                  className="w-[300px] overflow-x-hidden"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyles;
