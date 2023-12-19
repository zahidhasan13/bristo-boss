import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import "./Login.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../../components/SocialLogin";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true });
    });
  };

  // const handleCaptcha = (e) =>{
  //   e.preventDefault();
  //   const user_captcha_value = e.target.value;
  //   if(validateCaptcha(user_captcha_value)){
  //     setDisabled(false);
  //   }else{
  //     setDisabled(true);
  //   }
  // }

  return (
    <div className="login">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 shadow-2xl py-2 px-20 items-center">
        <div className="mr-10">
          <img src={loginImg} alt="" className="w-[500px]" />
        </div>
        <div className="mx-20">
          <h3 className="text-4xl font-bold text-black mb-4 text-center">
            Login!
          </h3>
          <form
            onSubmit={handleLogin}
            className="space-y-2 md:space-y-4 w-full my-4"
            action="#"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <LoadCanvasTemplate />
              </label>
              <input
                // onBlur={handleCaptcha}
                type="text"
                name="captcha"
                id="captcha"
                placeholder="write captcha"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              // disabled={disabled}
              type="submit"
              className={
                !disabled
                  ? "w-full text-white bg-[#D1A054] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  : "w-full text-white bg-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              }
            >
              Sign in
            </button>
            <p className="text-center text-sm font-light text-[#D1A054] dark:text-gray-400">
              New Here?{" "}
              <Link
                to="/signup"
                className="font-medium text-[#D1A054] hover:underline"
              >
                Create a New Account
              </Link>
            </p>
          </form>
          <div className="text-center space-y-4 mt-4 text-[#444444]">
            <p className="font-medium">Or sign in with</p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
