import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import './Category.css'

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../shared/SectionTitle";

const Category = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <SectionTitle
            subHeading="---From 11:00am to 10:00pm---"
            heading="ORDER ONLINE"
            ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-3xl uppercase text-white text-center -mt-16">salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text-3xl uppercase text-white text-center -mt-16">pizza</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-3xl uppercase text-white text-center -mt-16">soup</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-3xl uppercase text-white text-center -mt-16">desert</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-3xl uppercase text-white text-center -mt-16">salad</h3>
            </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
