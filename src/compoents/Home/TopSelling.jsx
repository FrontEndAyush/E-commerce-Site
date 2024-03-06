import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopSelling = () => {
  let [products, setProducts] = useState([]);
  let [addMore, setAddMore] = useState(4);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const AddMoreProjects = () => {
    setAddMore((previousValue) => previousValue + 4);
  };
  return (
    <div className="lg:py-10 py-4">
      <div className="container mx-auto">
        <h1 className="text-center   lg:block text-5xl  font-extrabold">
          Top Selling
        </h1>

        {/* card  */}
        <div className="flex lg:justify-between justify-center pt-7 flex-wrap gap-4">
          {products.slice(0, addMore).map((product) => (
            <Link
              to={`/clothings/${product.id}`}
              key={product.id}
              className="border-2 w-[250px] flex flex-col justify-center p-5 rounded-md "
            >
              <Link>
                <img src={product.image} className="w-[200px]" alt="" />
              </Link>

              <p className="w-[200px] mt-2">{product.title}.</p>

              <p>${product.price}</p>
            </Link>
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
      </div>
    </div>
  );
};

export default TopSelling;
