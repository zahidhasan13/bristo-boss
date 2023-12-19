import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import SectionTitle from "../shared/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
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
        <title>Add an Item || Bistro Boss</title>
      </Helmet>
      <Scroll />
      <SectionTitle
        subHeading="---Hurry Up!---"
        heading="MANAGE ALL ITEMS"
      ></SectionTitle>
      <div>
        <div className="flex justify-between items-center mb-10 mx-4">
          <h2 className="text-3xl">Total Item: {menu.length}</h2>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Catrgory</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, index) => (
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
                    <td>{item.category}</td>
                    <td>${item.price}</td>
                    <th>
                      <button
                        // onClick={() => handleDelete(item)}
                        className="btn btn-sm bg-red-700 text-white"
                      >
                        <FaEdit></FaEdit>
                      </button>
                    </th>
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

export default ManageItems;
