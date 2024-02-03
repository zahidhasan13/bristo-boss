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
        <div className="flex justify-between items-center mb-10 lg:pl-16 lg:pr-4 px-4 xl:px-0">
          <h2 className="text-3xl">Total Booking: {booking.length}</h2>
        </div>
        <div>
          <div className="overflow-x-auto lg:pl-16 lg:pr-4 px-4 xl:px-0">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              {/* head */}
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Guest
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {booking.map((book) => (
                  <tr key={book._id} className="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {book.date}
                    </th>
                    <td className="px-4 py-3 whitespace-nowrap">{book.time}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {book.person}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {book.email}
                    </td>
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
