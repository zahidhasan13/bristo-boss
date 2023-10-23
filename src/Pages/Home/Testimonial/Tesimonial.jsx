import SectionTitle from "../../shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa6";

const Tesimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-32 my-20 text-center">
              <div className="flex justify-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              </div>
              <p className="text-[100px] flex justify-center"><FaQuoteLeft></FaQuoteLeft></p>
              <p>{review.details}</p>
              <h3 className="text-2xl mt-4 text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tesimonial;
