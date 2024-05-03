import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>

      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  const handleLogOutUser = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <nav className="sticky z-50 top-0 mb-2 ">
      <div className="navbar container mx-auto px-4 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu gap-3 z-50 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-3 menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5">
          <Link to={'/cartDetails'}>
          <div className="indicator">
          <CiShoppingCart className="text-2xl cursor-pointer" />
          <span className="indicator-item badge badge-secondary">0</span>
          </div>
          </Link>
          <CiSearch className="text-2xl cursor-pointer" />
          {user ? (
            <div>
              <Link className="btn btn-outline btn-error">Appointment</Link>
              <button
                onClick={handleLogOutUser}
                className="btn btn-primary ml-3"
              >
                Log out
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-info">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
