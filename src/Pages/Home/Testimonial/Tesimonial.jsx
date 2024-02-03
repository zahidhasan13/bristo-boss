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
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="md:mx-32 md:my-20 mx-5 mb-5 text-center">
              <div className="flex justify-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>
              <p className="md:text-[100px] text-6xl flex justify-center">
                <FaQuoteLeft></FaQuoteLeft>
              </p>
              <p className="text-sm md:text-lg">{review.details}</p>
              <h3 className="md:text-2xl text-xl mt-4 text-orange-500">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tesimonial;
