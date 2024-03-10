import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import Comments from "./Home/Comments";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../Reducer/Reducer";
import { getId } from "../Reducer/Reducer";
import Zoom from "react-img-zoom-gdn";

const ViewProduct = () => {
  let dispatch = useDispatch();
  let products = useSelector((state) => state.counterSlice.product);

  let { id } = useParams();

  let filter = products.filter((product) => product.id == id);

  return (
    <div>
      <div className="container mx-auto w-full ">
        <section className="text-gray-600 body-font">
          {filter.map((product) => (
            <div
              key={product.id}
              className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center"
            >
              <div className="rounded-lg">
                <Zoom
                  img={product.image}
                  zoomScale={3}
                  width={400}
                  height={400}
                />
                ;
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {product.title}
                </h1>
                <span className="flex text-yellow-300 mb-2 text-2xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <p className="mb-8 leading-relaxed">{product.description}</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    ${product.price}
                  </button>
                  <button
                    className="text-lg px-16 py-3 rounded-full text-white hover:bg-green-500 transition-all duration-300 bg-black ml-8"
                    onClick={() =>
                      dispatch(increment()) && dispatch(getId(product.id))
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Comments></Comments>
    </div>
  );
};

export default ViewProduct;
