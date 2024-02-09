import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Scroll from "../../components/Scroll";
import SectionTitle from "../shared/SectionTitle";

const UpdateItem = () => {
  const router = useNavigate();
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState({});
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(`https://bistro-boss-server-puce-phi.vercel.app/menu/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleItem(data);
      });
  }, [id]);

  const onSubmit = (data) => {
    fetch(`https://bistro-boss-server-puce-phi.vercel.app/updateitem/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        category: data.category,
        price: data.price,
        recipe: data.recipe,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          Swal.fire({
            icon: "success",
            title: "Menu Updated Successfully",
            confirmButtonText: "Cool",
          });
          router("/dashboard/manageitems");
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
        subHeading="---What's New?---"
        heading="UPDATE AN ITEM"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 my-10 px-10">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </div>
          <input
            type="text"
            placeholder="Raciepe Name"
            defaultValue={singleItem.name}
            {...register("name")}
            className="input input-bordered w-full m-0"
          />
        </label>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Category*</span>
            </div>
            <select
              {...register("category")}
              className="select select-bordered m-0"
            >
              <option value="" disabled>
                Category
              </option>
              <option value="salad" selected={singleItem.category === "salad"}>
                Salad
              </option>
              <option value="pizza" selected={singleItem.category === "pizza"}>
                Pizza
              </option>
              <option value="soup" selected={singleItem.category === "soup"}>
                Soup
              </option>
              <option
                value="dessert"
                selected={singleItem.category === "dessert"}
              >
                Dessert
              </option>
              <option
                value="drinks"
                selected={singleItem.category === "drinks"}
              >
                Drinks
              </option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Price*</span>
            </div>
            <input
              type="text"
              placeholder="Raciepe Name"
              defaultValue={singleItem.price}
              {...register("price")}
              className="input input-bordered w-full m-0"
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details*</span>
          </div>
          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered h-40"
            defaultValue={singleItem.recipe}
          ></textarea>
        </label>
        <button
          type="submit"
          className="btn rounded-none text-white flex justify-center items-center bg-gradient-to-r from-[#855E23] to-[#B2802F]"
        >
          <span>Update Item</span>
          <FaUtensils />
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
