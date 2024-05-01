import { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);

  const handlCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);
    // crate user
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="py-10 flex-col lg:flex-row flex items-center justify-between lg:gap-10 gap-8">
      <div className="lg:w-1/2">
        <img src={loginImg} alt="" />
      </div>
      <div className="border p-10 rounded-lg lg:w-1/2">
        <form onSubmit={handlCreateUser} className="space-y-5">
          <h2 className="text-center text-3xl mb-5 font-bold">Sign Up </h2>
          <label htmlFor="">
            <strong>Name</strong>
            <input
              type="text"
              className="input input-bordered w-full"
              name="name"
              placeholder="Your Name"
            />
          </label>{" "}
          <br /> <br />
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
          <p className="text-center">Or Sign up with</p>
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
            Already have an account?{" "}
            <Link to={"/login"} className="text-red-400 font-bold">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
