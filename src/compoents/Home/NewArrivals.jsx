import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const NewArrivals = () => {
  let products = useSelector((state) => state.counterSlice.product);
  let isTrue = useSelector((state) => state.counterSlice.isTrue);

  let [addMore, setAddMore] = useState(4);

  const AddMoreProjects = () => {
    setAddMore((previousValue) => previousValue + 4);
  };

  return (
    <div className="lg:py-20 py-4">
      <div className="container mx-auto">
        <h1 className="text-center   lg:block text-5xl  font-extrabold">
          New Arrivals
        </h1>
        {isTrue === true ? (
          <>
            <div className="flex justify-center mt-16">
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </div>
          </>
        ) : (
          <>
            {/* card  */}
            <div className="flex lg:justify-between justify-center pt-7 flex-wrap gap-4">
              {products.slice(0, addMore).map((product) => (
                <div
                  key={product.id}
                  className="border-2  w-[250px] flex flex-col justify-center p-5 rounded-md "
                >
                  <Link to={`/shop/${product.id}`}>
                    <img src={product.image} className="w-[200px]" alt="" />
                  </Link>

                  <p className="w-[200px] mt-2">{product.title}.</p>
                  <p className="flex text-center mt-2 align-middle gap-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />{" "}
                    <span className="relative bottom-1">
                      {product.rating.rate}/{product.rating.count}
                    </span>
                  </p>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>

            {/* Show More Button  */}

            <div
              className={`${
                addMore === products.length && "hidden"
              } flex justify-center`}
            >
              <button
                className="bg-transparent rounded-full py-3 px-10 border-2 mt-5"
                onClick={AddMoreProjects}
              >
                Show More
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
