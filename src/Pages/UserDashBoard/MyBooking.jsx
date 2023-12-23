import { Helmet } from "react-helmet-async";
import useBooking from "../../hooks/useBooking";
import Scroll from "../../components/Scroll";
import SectionTitle from "../shared/SectionTitle";
import Swal from "sweetalert2";

const MyBooking = () => {
  const [booking, refetch] = useBooking();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((book) => (
                  <tr key={book._id}>
                    <td>{book.date}</td>
                    <td>{book.time}</td>
                    <td>{book.person}</td>
                    <td>{book.email}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(book)}
                        className="btn btn-sm bg-red-700 text-white"
                      >
                        Cnacel
                      </button>
                    </th>
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
