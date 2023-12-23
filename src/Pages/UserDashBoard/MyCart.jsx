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
        <div className="flex justify-between items-center mb-10 mx-4">
          <h2 className="text-3xl">Total Order: {cart.length}</h2>
          <h2 className="text-3xl">Total Price: ${totalPrice.toFixed(2)}</h2>
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
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Food</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <th>
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
