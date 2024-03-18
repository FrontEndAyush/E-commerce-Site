import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import Comments from "./Home/Comments";
import { useDispatch } from "react-redux";
import { increment } from "../Reducer/Reducer";
import { getId } from "../Reducer/Reducer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// for Zooming the images installed from npm js
import Zoom from "react-img-zoom-gdn";

const ViewProduct = () => {
  const notify = () => toast("Product Added😊!");
  let productItems = localStorage.getItem("productItems");
  let dispatch = useDispatch();

  let { id } = useParams();

  let filter = JSON.parse(productItems).filter((product) => product.id == id);

  return (
    <div>
      <div className="w-[100px]">
        <ToastContainer className="mt-[100px] mr-[170px] w-[100px]" />
      </div>

      <div className="container mx-auto w-full ">
        <section className="text-gray-600 body-font">
          {filter.map((product) => (
            <div
              key={product.id}
              className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center"
            >
              <div className="rounded-lg">
                {/* zoom effect attribut  */}
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
                    className="text-lg px-16 py-2 rounded-full text-white  transition-all hover:bg-green-600 duration-700 bg-black ml-8"
                    onClick={() =>
                      dispatch(increment()) &&
                      dispatch(getId(product.id)) &&
                      notify()
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
