import { useContext } from "react";
import { useState } from "react";
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import profile from "../../assets/others/profile.png";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  // console.log(cart.length);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <header>
      <nav className="md:bg-[rgba(0,0,0,0.3)] bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 md:fixed top-0 left-0 right-0 z-40">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/">
            <span className="text-3xl uppercase font-bold text-white">
              bistro boss
            </span>
            <p className="text-xl uppercase tracking-[6px] font-medium text-white">
              Restraurent
            </p>
          </Link>
          <div className="flex items-center">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="text-2xl"></FaBars>
            </button>
          </div>
          <div
            className={
              menuOpen
                ? "block justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                : "hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            }
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl text-[#EEFF25] uppercase"
                      : "text-xl text-white uppercase"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-xl text-white uppercase">
                  contact us
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    to={isAdmin ? "dashboard/adminhome" : "dashboard/userhome"}
                    className="text-xl text-white uppercase"
                  >
                    dashboard
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to="/menu" className="text-xl text-white uppercase">
                  our menu
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/order/salad"
                  className="text-xl text-white uppercase"
                >
                  our shop
                </NavLink>
              </li>
              {!isAdmin && (
                <li className="flex items-center">
                  <NavLink
                    to="/dashboard/mycart"
                    className="text-xl text-white uppercase flex items-center relative"
                  >
                    <FaCartShopping></FaCartShopping>
                    <span className="bg-[#D99904] text-sm p-1 rounded-full absolute -top-3 -right-4 w-6 h-6 flex items-center justify-center">
                      {cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
              )}
              {user ? (
                <li className="flex items-center space-x-2">
                  <button
                    onClick={handleLogOut}
                    className="text-xl text-white uppercase"
                  >
                    logout
                  </button>
                  <img src={profile} alt="Profile" className="w-6" />
                </li>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className="text-xl text-white uppercase"
                    >
                      login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
