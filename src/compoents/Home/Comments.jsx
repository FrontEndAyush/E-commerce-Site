import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Comments = () => {
  let [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, []);

  return (
    <div className="lg:py-20 py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-center mb-5">
          OUR HAPPY CUSTOMERS
        </h1>
        <Swiper
          spaceBetween={10}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="flex justify-center  flex-row mt-7 ">
            {comments.slice(0, 20).map((comment) => (
              <SwiperSlide key={comment.id}>
                <div
                  key={comment.id}
                  className="w-[250px] lg:w-[300px] mx-auto bg-[#b7acac21] mb-12 h-[150px] rounded-lg p-5 flex flex-col justify-center"
                >
                  <span className="flex text-yellow-500">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </span>
                  <h1 className="flex capitalize mt-3">
                    {comment.user.username}.{" "}
                    <span className=" border-2 rounded-full mt-2 relative bottom-1  text-white bg-[green]  text-[10px] ">
                      <TiTick />
                    </span>
                  </h1>
                  <p className="text-left">{comment.body}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Comments;
