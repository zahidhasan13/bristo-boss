import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import Scroll from "../../components/Scroll";
import useCart from "../../hooks/useCart";
import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width: "auto",
      padding: "1.25rem",
      customClass: {
        title: "text-xl", // Adjust title font size
        content: "text-base", // Adjust content font size
        actions: "flex justify-end", // Align buttons to the right
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
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
        <title>My Cart | Bistro Boss</title>
      </Helmet>
      <Scroll />
      <SectionTitle
        subHeading="---My Cart---"
        heading="WANNA ADD MORE?"
      ></SectionTitle>
      <div>
        <div className="md:flex md:justify-between md:items-center md:mb-10 mb-5 lg:pl-16 lg:pr-4 px-4  xl:pl-0">
          <h2 className="md:text-3xl text-lg font-bold md:font-normal">
            Total Order: {cart.length}
          </h2>
          <h2 className="md:text-3xl text-lg font-bold md:font-normal">
            Total Price: ${totalPrice.toFixed(2)}
          </h2>
          <Link to="/dashboard/payment">
            <button
              disabled={cart.length <= 0}
              className="btn btn-sm bg-[#D1A054] text-black hover:text-white"
            >
              PAY
            </button>
          </Link>
        </div>
        <div>
          <div className="overflow-x-auto lg:pl-16 lg:pr-4 px-4 xl:pl-0">
            <table className="w-full text-sm text-left">
              {/* head */}
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    #
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Food
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id} className="border-b">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-4 py-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">${item.price}</td>
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-sm bg-red-700 text-white"
                      >
                        <FaTrash></FaTrash>
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

export default MyCart;
