import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

const UserDashBoard = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const path = useLocation();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [path]);
  return (
    <div>
      <button
        onClick={toggleMenu}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 absolute"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <div className="grid lg:grid-cols-5 lg:gap-5">
        <aside
          id="default-sidebar"
          className={`absolute top-0 left-0 z-40 ${
            openMenu ? "block" : "hidden md:block"
          }`}
          aria-label="Sidenav"
        >
          <div className=" bg-[#D1A054] overflow-y-auto py-5 px-3 h-full dark:bg-gray-800 dark:border-gray-700 flex justify-center">
            <Sidebar></Sidebar>
          </div>
        </aside>
        <div className="lg:col-span-1"></div>
        <div className="lg:col-span-4 justify-self-center w-full lg:mr-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
