import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import SectionTitle from "../shared/SectionTitle";
import { FaRocket } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";

const AddReview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [rating, setRating] = useState(3);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newData = {
      rating: rating,
      name: data.name,
      email: data.email,
      details: data.details,
    };
    axiosSecure.post("/reviews", newData).then((data) => {
      if (data.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  // const rating = ["1", "2", "3", "4", "5"];
  return (
    <div>
      <Helmet>
        <title>My Booking | Bistro Boss</title>
      </Helmet>
      <Scroll />
      <SectionTitle
        subHeading="---Sharing is Caring---"
        heading="GIVE A REVIEW"
      ></SectionTitle>
      <div className="bg-[#F3F3F3] md:mx-20 md:py-10">
        <h2 className="text-3xl font-semibold text-center uppercase">
          rate us!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="my-4 text-center">
          {/* <select
            {...register("rating", { required: true })}
            className="select select-bordered"
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              Rating
            </option>
            {rating.map((rate, index) => (
              <option key={index} value={rate}>
                {rate} star
              </option>
            ))}
          </select> */}
          <Rating
            style={{ maxWidth: 180 }}
            value={rating}
            // {...register("rating", { required: true })}
            onChange={setRating}
          />
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Name*</span>
            </div>
            <input
              type="text"
              value={user?.displayName}
              placeholder="Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Email*</span>
            </div>
            <input
              type="email"
              value={user?.email}
              placeholder="Name"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">
                Kindly express your care in a short way.
              </span>
            </div>
            <textarea
              {...register("details", { required: true })}
              className="textarea textarea-bordered h-40"
              placeholder="Raciepe Details"
            ></textarea>
          </label>
          <button
            type="submit"
            className="btn rounded-none text-white flex justify-center items-center bg-gradient-to-r from-[#855E23] to-[#B2802F] hover:from-[#B2802F] hover:to-[#855E23] mt-14"
          >
            <span>Send Review</span>
            <FaRocket></FaRocket>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
