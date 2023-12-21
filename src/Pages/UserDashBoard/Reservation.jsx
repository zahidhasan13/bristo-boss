import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import SectionTitle from "../shared/SectionTitle";
import { GiNotebook } from "react-icons/gi";
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Reservation = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axiosSecure.post("/booking", data).then((data) => {
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

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      <Scroll />
      <SectionTitle
        subHeading="---Reservation---"
        heading="BOOK A TABLE"
      ></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-3 grid-cols-1 gap-5 my-2"
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Date*</span>
          </div>
          <input
            type="date"
            placeholder="Raciepe Name"
            {...register("date", { required: true })}
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Time*</span>
          </div>
          <input
            type="time"
            placeholder="Raciepe Name"
            {...register("time", { required: true })}
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Guest*</span>
          </div>
          <select
            {...register("person", { required: true })}
            className="select select-bordered"
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              Person
            </option>
            <option value="1 Person">1 Person</option>
            <option value="2 Person">2 Person</option>
            <option value="3 Person">3 Person</option>
            <option value="4 Person">4 Person</option>
            <option value="5 Person">5 Person</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Name*</span>
          </div>
          <input
            type="text"
            value={user?.displayName}
            placeholder="Raciepe Name"
            {...register("name", { required: true })}
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Phone*</span>
          </div>
          <input
            type="text"
            placeholder="Raciepe Name"
            {...register("phone", { required: true })}
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Email*</span>
          </div>
          <input
            type="text"
            value={user?.email}
            placeholder="Raciepe Name"
            {...register("email", { required: true })}
            className="input input-bordered w-full"
          />
        </label>
        <div></div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn rounded-none text-white flex justify-center items-center bg-gradient-to-r from-[#855E23] to-[#B2802F] hover:from-[#B2802F] hover:to-[#855E23]"
          >
            <span>Add Items</span>
            <GiNotebook className="text-xl" />
          </button>
        </div>
        <div></div>
      </form>
      <SectionTitle
        subHeading="---Visit Us---"
        heading="OUR LOCATION"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
        <div className="text-center">
          <div className="bg-[#D1A054] text-white py-3 flex justify-center">
            <FaPhone></FaPhone>
          </div>
          <div className="border-b border-l border-r pb-4 h-36">
            <div className="bg-[#F3F3F3] text-black pt-4 pb-8 mx-4 h-32">
              <h2 className="text-xl uppercase">phone</h2>
              <p>+123459874</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-[#D1A054] text-white py-3 flex justify-center">
            <FaLocationDot></FaLocationDot>
          </div>
          <div className="border-b border-l border-r pb-4 h-36">
            <div className="bg-[#F3F3F3] text-black pt-4 pb-8 mx-4 h-32">
              <h2 className="text-xl uppercase">address</h2>
              <p>London, UK</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-[#D1A054] text-white py-3 flex justify-center">
            <FaClock></FaClock>
          </div>
          <div className="border-b border-l border-r pb-4 h-36">
            <div className="bg-[#F3F3F3] text-black pt-4 pb-8 mx-4 h-32">
              <h2 className="text-xl uppercase">working hour</h2>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
