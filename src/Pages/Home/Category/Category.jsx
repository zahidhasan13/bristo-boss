import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Category.css";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../shared/SectionTitle";

const Category = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto px-5 mb-10
    "
    >
      <SectionTitle
        subHeading="---From 11:00am to 10:00pm---"
        heading="ORDER ONLINE"
      ></SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
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
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={slide1} alt="" className="rounded-lg" />
            <h3 className="text-3xl uppercase text-white text-center absolute left-0 right-0 bottom-12 bg-black bg-opacity-30 py-2">
              salad
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" className="rounded-lg" />
          <h3 className="text-3xl uppercase text-white text-center absolute left-0 right-0 bottom-12 bg-black bg-opacity-30 py-2">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" className="rounded-lg" />
          <h3 className="text-3xl uppercase text-white text-center absolute left-0 right-0 bottom-12 bg-black bg-opacity-30 py-2">
            soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" className="rounded-lg" />
          <h3 className="text-3xl uppercase text-white text-center absolute left-0 right-0 bottom-12 bg-black bg-opacity-30 py-2">
            desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" className="rounded-lg" />
          <h3 className="text-3xl uppercase text-white text-center absolute left-0 right-0 bottom-12 bg-black bg-opacity-30 py-2">
            salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
