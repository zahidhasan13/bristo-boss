import { FaHouseChimney, FaStar, FaWallet } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { FaCalendar, FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import usePayment from "../../hooks/usePayment";
import { Link } from "react-router-dom";
import useBooking from "../../hooks/useBooking";
import useReview from "../../hooks/useReview";

const UserHome = () => {
  const { user } = useAuth();
  const [payment] = usePayment();
  const [review] = useReview();
  const [booking] = useBooking();
  const pay = payment.reduce((sum, pay) => sum + pay.quantity, 0);
  return (
    <div className="md:mt-10 my-20">
      <h2 className="text-3xl lg:pl-16 pl-4 xl:pl-0">Hi, Welcome Back!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10 lg:pl-16 lg:pr-4 px-4 xl:pl-0">
        <div className="flex justify-center items-center space-x-4 bg-gradient-to-r from-[#BD38F6] to-[#e2e0e0] text-white font-bold rounded-lg py-5">
          <span className="text-3xl">
            <FaWallet></FaWallet>
          </span>
          <div>
            <p className="text-3xl">202</p>
            <p className="font-normal">Menu</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 bg-gradient-to-r from-[#D1A054] to-[#e2e0e0] text-white font-bold rounded-lg py-5">
          <span className="text-3xl">
            <FaHouseChimney></FaHouseChimney>
          </span>
          <div>
            <p className="text-3xl">202</p>
            <p className="font-normal">Menu</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 bg-gradient-to-r from-[#FE4E85] to-[#e2e0e0] text-white font-bold rounded-lg py-5">
          <span className="text-3xl">
            <FaPhoneAlt></FaPhoneAlt>
          </span>
          <div>
            <p className="text-3xl">202</p>
            <p className="font-normal">Menu</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 xl:pr-4">
        <div className="bg-[#FFEDD5] flex flex-col justify-center items-center md:py-20 py-5 md:border-r-2 border-[#D1A054] space-y-4 text-black font-semibold rounded-t md:rounded-t border-b-2 md:border-b-0">
          <img
            src={user?.photoURL}
            alt="User"
            className="rounded-full w-28 border-4 border-[#D1A054]"
          />
          <p className="text-3xl">Name: {user?.displayName}</p>
          <p>Email: {user?.email}</p>
        </div>
        <div className="bg-[#FEF9C3] md:px-20 md:py-20 px-5 py-5 text-black font-semibold rounded-b md:rounded-r md:border-l-2 md:border-[#D1A054] border-t-2 md:border-t-0">
          <h2 className="lg:text-3xl text-xl uppercase mb-10">
            your activities
          </h2>
          <Link to="/dashboard/paymenthistory">
            <div className="text-[#0088FE] flex items-center space-x-1">
              <FaShoppingCart></FaShoppingCart>
              <span className="uppercase">orders: {pay}</span>
            </div>
          </Link>
          <div className="text-[#00C4A1] flex items-center space-x-1">
            <FaStar></FaStar>
            <span className="uppercase">review: {review.length}</span>
          </div>
          <div className="text-[#FFBB28] flex items-center space-x-1">
            <FaCalendar></FaCalendar>
            <span className="uppercase">bookibgs: {booking.length}</span>
          </div>
          <Link to="/dashboard/paymenthistory">
            <div className="text-[#FF8042] flex items-center space-x-1">
              <FaWallet></FaWallet>
              <span className="uppercase">payment: {payment.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
