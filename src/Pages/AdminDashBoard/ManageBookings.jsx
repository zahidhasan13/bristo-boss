import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../shared/SectionTitle";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/bookings").then((data) => setBookings(data.data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Manage All Bookings || Bistro Boss</title>
      </Helmet>
      <Scroll />
      <SectionTitle
        subHeading="---At a Glance!---"
        heading="MANAGE ALL BOOKINGS"
      ></SectionTitle>
      <div>
        <div className="flex justify-between items-center mb-10 mx-4">
          <h2 className="text-3xl">Total Bokings: {bookings.length}</h2>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              {/* head */}
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th></th>
                  <th scope="col" className="px-4 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Guest
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((user, index) => (
                  <tr key={user._id} className="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-4 py-3 whitespace-nowrap">{user.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {user.person}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.time}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {user.phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBookings;
