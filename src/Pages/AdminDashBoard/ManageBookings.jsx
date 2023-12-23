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
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Guest</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.person}</td>
                    <td>{user.date}</td>
                    <td>{user.time}</td>
                    <td>{user.phone}</td>
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
