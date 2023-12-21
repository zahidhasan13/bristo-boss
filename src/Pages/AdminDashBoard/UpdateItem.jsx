import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import SectionTitle from "../shared/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const UpdateItem = () => {
  // const { id } = useParams();
  // console.log("id", id);
  const { register, handleSubmit } = useForm();

  // const onSubmit = () => {
  //   fetch(`http://localhost:5000/updateitem/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       status: "confirm",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // if (data.modifiedCount > 0) {
  //       //   // const remaining = cart.filter(ct => ct._id !== id);
  //       //   // const confirmed = cart.find(ct => ct._id === id);
  //       //   // confirmed.status = "confirm";
  //       //   // const newCart = [...remaining, confirmed];
  //       //   // setCart(newCart);
  //       // }
  //       console.log(data);
  //     });
  // };
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
      <form onSubmit={handleSubmit()} className="space-y-4 my-10 px-10">
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
