import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();
  const {createUser} = useContext(AuthContext)

  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
    })
  }
  return (
    <div className="signup">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 shadow-2xl py-20 px-20 items-center">
        <div className="mx-20">
          <h3 className="text-4xl font-bold text-black mb-6 text-center">
            Sign Up
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 w-full" action="#">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name*
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
                required=""
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email*
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password*
              </label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true, maxLength: 20, minLength:6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
              {errors.password?.type === "required" && <span className="text-red-600">Password is required</span>}
              {errors.password?.type === "minLemgth" && <span className="text-red-600">Password must be 6 characters</span>}
              {errors.password?.type === "maxLemgth" && <span className="text-red-600">Password must be less than 20 characters</span>}
              {errors.password?.type === "pattern" && <span className="text-red-600">Password must be have at least (A-Z) one uppercase, (a-z) one lowercase, (0-9) one number and (!@#$&*) one special character.</span>}
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[#D1A054] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign Up
            </button>
            <p className="text-center text-sm font-light text-[#D1A054] dark:text-gray-400">
              Already Registered?{" "}
              <Link
                to="/login"
                className="font-medium text-[#D1A054] hover:underline"
              >
                Go to log in
              </Link>
            </p>
          </form>
          <div className="text-center space-y-4 mt-4 text-[#444444]">
            <p className="font-medium">Or sign up with</p>
            <div className="flex justify-center items-center space-x-8 text-2xl">
              <button>
                <FaFacebook></FaFacebook>
              </button>
              <button>
                <FaGoogle></FaGoogle>
              </button>
              <button>
                <FaGithub></FaGithub>
              </button>
            </div>
          </div>
        </div>
        <div className="mr-10">
          <img src={loginImg} alt="" className="w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
