import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import { AuthContext } from "../provider/AuthProvider";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const [, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user?.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Add to cart successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl mb-8">
      <figure className="">
        <img src={image} alt={name} className="md:w-[400px] w-full" />
      </figure>
      <p className="absolute right-4 top-4 bg-black px-4 py-2 rounded-xl text-white">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg md:text-xl lg:text-2xl">{name}</h2>
        <p className="text-sm lg:text-lg">{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 uppercase border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
