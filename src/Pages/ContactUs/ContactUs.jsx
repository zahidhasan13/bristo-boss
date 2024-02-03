import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import Cover from "../shared/Cover";
import contactBG from "../../assets/contact/banner.jpg";
import SectionTitle from "../shared/SectionTitle";
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      <Scroll />
      <Cover
        img={contactBG}
        title={"contact us"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading="---Visit Us---"
        heading="OUR LOCATION"
      ></SectionTitle>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-0">
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
                <p>Dhaka, Bangladesh</p>
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
        <SectionTitle
          subHeading="---Sent Us a Message---"
          heading="CONTACT FORM"
        ></SectionTitle>
        <form className="bg-gray-300 md:py-10 md:px-5 py-5 px-3 md:my-0 md:mb-10 mb-5 mx-5 md:mx-auto">
          <div className="md:grid md:grid-cols-2 grid-cols-1 md:gap-10">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-black font-semibold">
                  Name*
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-black font-semibold">
                  Email*
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-black font-semibold">
                Phone*
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-black font-semibold">
                Message*
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <div className="flex justify-center mt-10">
            <button className="btn rounded-none text-white flex justify-center items-center bg-gradient-to-r from-[#855E23] to-[#B2802F] border-none">
              send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
