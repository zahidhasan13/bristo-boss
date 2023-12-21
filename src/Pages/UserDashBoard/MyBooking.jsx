import { Helmet } from "react-helmet-async";
import useBooking from "../../hooks/useBooking";
import Scroll from "../../components/Scroll";
import SectionTitle from "../shared/SectionTitle";

const MyBooking = () => {
  const [booking] = useBooking();
  return (
    <div>
      <Helmet>
        <title>My Booking | Bistro Boss</title>
      </Helmet>
      <Scroll />
      <SectionTitle
        subHeading="---How Many??---"
        heading="MY BOOKINGS"
      ></SectionTitle>
      <div>
        <div className="flex justify-between items-center mb-10 mx-4">
          <h2 className="text-3xl">Total Booking: {booking.length}</h2>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guest</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((book) => (
                  <tr key={book._id}>
                    <td>{book.date}</td>
                    <td>{book.time}</td>
                    <td>{book.person}</td>
                    <td>{book.email}</td>
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

export default MyBooking;
