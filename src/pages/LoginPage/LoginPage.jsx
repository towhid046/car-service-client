import { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
import axios from "axios";
import ScrollToTopOnMount from './../../components/shared/ScrollToTopOnMount/ScrollToTopOnMount';

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email };

    // login user
    loginUser(email, password)
      .then((res) => {
        swal("Success!", "You have login successfully!", "success");

        // get access token:
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location.state : "/");
            }
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="py-10 flex-col lg:flex-row flex items-center justify-between lg:gap-10 gap-8">
      <ScrollToTopOnMount/>
      <div className="lg:w-1/2">
        <img src={loginImg} alt="" />
      </div>
      <div className="border p-10 rounded-lg lg:w-1/2">
        <form onSubmit={handleLoginUser} className="space-y-5">
          <h2 className="text-center text-3xl mb-5 font-bold">Login </h2>
          <label htmlFor="">
            <strong>Email</strong>
            <input
              type="email"
              className="input input-bordered w-full"
              name="email"
              placeholder="Your email"
            />
          </label>{" "}
          <br /> <br />
          <label htmlFor="">
            <strong>Password</strong>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
          </label>
          <input
            type="submit"
            value="Sign In"
            className="btn btn-error w-full"
          />
          <p className="text-center">Or Sign In with</p>
          <ul className="flex items-center justify-center  gap-3">
            <li className="btn h-12 w-12 rounded-full">
              <FaFacebookF className="text-blue-500 text-xl" />
            </li>
            <li className="btn h-12 w-12 rounded-full">
              <FaLinkedinIn className="text-blue-500 text-xl" />
            </li>
            <li className="btn h-12 w-12 rounded-full">
              <FaGoogle className=" text-2xl" />
            </li>
          </ul>
          <p className="mt-12 text-center">
            Haven't an account?{" "}
            <Link to={"/register"} className="text-red-400 font-bold">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
