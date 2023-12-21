import { Helmet } from "react-helmet-async";
import SectionTitle from "../shared/SectionTitle";
import Scroll from "../../components/Scroll";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resImage) => {
        if (resImage.success) {
          const imgUrl = resImage.data.display_url;
          const { name, price, recipe, category } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            recipe,
            category,
            image: imgUrl,
          };
          axiosSecure.post("/menu", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item Added Successfully",
                showConfirmButton: false,
                timer: 1500,
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
        subHeading="---What's New?---"
        heading="ADD AN ITEM"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 my-10 px-10">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </div>
          <input
            type="text"
            placeholder="Raciepe Name"
            {...register("name", { required: true, maxLength: 80 })}
            className="input input-bordered w-full"
          />
        </label>
        <div className="grid grid-cols-2 gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Category*</span>
            </div>
            <select
              {...register("category", { required: true })}
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
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details*</span>
          </div>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-40"
            placeholder="Raciepe Details"
          ></textarea>
        </label>
        <input
          type="file"
          className="file-input w-full"
          {...register("image", { required: true })}
        />
        <button
          type="submit"
          className="btn rounded-none text-white flex justify-center items-center bg-gradient-to-r from-[#855E23] to-[#B2802F]"
        >
          <span>Add Items</span>
          <FaUtensils />
        </button>
      </form>
    </div>
  );
};

export default AddItems;
