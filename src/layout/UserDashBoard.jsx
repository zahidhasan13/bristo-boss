import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const UserDashBoard = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-1 bg-[#D1A054] min-h-screen">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-4 justify-self-center w-full mr-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UserDashBoard;
