import { FaBook, FaSignOutAlt, FaUsers } from "react-icons/fa";
import {
  FaAlignLeft,
  FaBagShopping,
  FaBars,
  FaCalendar,
  FaCalendarDay,
  FaCartShopping,
  FaHouse,
  FaPhone,
  FaUtensils,
  FaWallet,
} from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";

const Sidebar = () => {
  // const isAdmin = true;
  const { logOutUser } = useAuth();
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch(() => {});
  };

  return (
    <div className="px-4 pt-10">
      <Link to="/">
        <span className="text-3xl uppercase font-bold text-black">
          bistro boss
        </span>
        <p className="text-xl uppercase tracking-[6px] font-medium text-black">
          Restraurent
        </p>
      </Link>
      {isAdmin ? (
        <div className="mt-20">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink
                to="/dashboard/adminhome"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-white uppercase flex items-center space-x-2"
                    : "text-xl text-black uppercase flex items-center space-x-2"
                }
              >
                <FaHouse></FaHouse>
                <span>Admin Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/additems"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-white uppercase flex items-center space-x-2"
                    : "text-xl text-black uppercase flex items-center space-x-2"
                }
              >
                <FaUtensils />
                <span>Add Items</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manageitems"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-white uppercase flex items-center space-x-2"
                    : "text-xl text-black uppercase flex items-center space-x-2"
                }
              >
                <FaAlignLeft />
                <span>Manage Items</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/managebookings"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-white uppercase flex items-center space-x-2"
                    : "text-xl text-black uppercase flex items-center space-x-2"
                }
              >
                <FaBook />
                <span>manage bookings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/allusers"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-white uppercase flex items-center space-x-2"
                    : "text-xl text-black uppercase flex items-center space-x-2"
                }
              >
                <FaUsers />
                <span>all users</span>
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div className="mt-20">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink
                to="/dashboard/userhome"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-white uppercase flex items-center space-x-2"
                    : "text-xl text-black uppercase flex items-center space-x-2"
                }
              >
                <FaHouse></FaHouse>
                <span>User Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/reservation"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-white uppercase flex items-center space-x-2"
                    : "text-xl text-black uppercase flex items-center space-x-2"
                }
              >
                <FaCalendar></FaCalendar>
                <span>reservation</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/paymenthistory"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-white uppercase flex items-center space-x-2"
                    : "text-xl text-black uppercase flex items-center space-x-2"
                }
              >
                <FaWallet></FaWallet>
                <span>payment history</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/mycart"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-white uppercase flex items-center space-x-2"
                    : "text-xl text-black uppercase flex items-center space-x-2"
                }
              >
                <FaCartShopping></FaCartShopping>
                <span>my cart({cart.length})</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addreview"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-white uppercase flex items-center space-x-2"
                    : "text-xl text-black uppercase flex items-center space-x-2"
                }
              >
                <MdReviews />
                <span>add review</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/mybooking"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-white uppercase flex items-center space-x-2"
                    : "text-xl text-black uppercase flex items-center space-x-2"
                }
              >
                <FaCalendarDay />
                <span>my booking</span>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <div className="my-10">
        <hr />
        <ul className="flex flex-col space-y-4 mt-5">
          <li>
            <Link
              to="/"
              className="text-xl text-black uppercase flex items-center space-x-2"
            >
              <FaHouse></FaHouse>
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="text-xl text-black uppercase flex items-center space-x-2"
            >
              <FaBars></FaBars>
              <span>menu</span>
            </Link>
          </li>
          <li>
            <Link
              to="/order/salad"
              className="text-xl text-black uppercase flex items-center space-x-2"
            >
              <FaBagShopping></FaBagShopping>
              <span>shop</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-xl text-black uppercase flex items-center space-x-2"
            >
              <FaPhone></FaPhone>
              <span>contact</span>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="text-xl text-black uppercase flex items-center space-x-2"
            >
              <FaSignOutAlt></FaSignOutAlt>
              <span>Log out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
