import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { logInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex justify-center items-center space-x-8">
        <button className="btn btn-circle btn-outline">
          <FaFacebook></FaFacebook>
        </button>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn btn-circle btn-outline">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
