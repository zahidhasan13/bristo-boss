import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import SectionTitle from "../shared/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UpdateItem = () => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState({});
  console.log(id);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axios.get(`http://localhost:5000/singleItem/${id}`).then((data) => {
      console.log(data);
    });
  }, [id]);

  const onSubmit = (data) => {
    const updateItem = {
      name: data.name,
      recipe: data.recipe,
      category: data.category,
      price: data.price,
    };
    console.log(updateItem);
    fetch(`http://localhost:5000/updateitem/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updateItem,
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
            className="input input-bordered w-full"
          />
        </label>
        <div className="grid grid-cols-2 gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Category*</span>
            </div>
            <select
              {...register("category")}
              className="select select-bordered"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
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
              className="input input-bordered w-full"
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
            placeholder="Raciepe Details"
            defaultValue={singleItem.details}
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
