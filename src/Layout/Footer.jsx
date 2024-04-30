import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import logo from "../assets/logo.svg";
const Footer = () => {
  const socialIcons = [
    <IoLogoGoogle />,
    <FaLinkedin />,
    <FaInstagram />,
    <FaXTwitter />,
  ];

  const supports = [
    { name: "Support Center", url: "/support-center" },
    { name: "Feedback", url: "/support-center" },
    { name: "Accesbility", url: "/support-center" },
  ];

  const abouts = [
    { name: "Home", url: "/" },
    { name: "Service", url: "/service" },
    { name: "Contact", url: "/contact" },
  ];
  const services = [
    { name: "Why Car Doctor", url: "/login" },
    { name: "About", url: "/about" },
  ];

  return (
    <footer className="bg-[#151515]">
      <div className="footer container mx-auto px-4 p-10 text-neutral-content">
        <div className="max-w-xs">
          <Link
            to="/"
            className="font-bold md:text-3xl text-2xl bg-gradient-to-r from-green-600 to-indigo-300  text-transparent bg-clip-text"
          >
            <img src={logo} alt="" />
          </Link>
          <p>
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <ul className="mt-4 flex gap-3 text-xl items-center text-blue-400">
            {socialIcons.map((icon, index) => (
              <li
                className="cursor-pointer btn rounded-full h-12 w-12 bg-[#2d2d2d] text-white text-xl hover:text-red-500 border-none "
                key={index}
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>

        <nav>
          <h6 className="footer-title text-lg">About</h6>
          {abouts.map((link, index) => (
            <Link to={link.url} key={index} className="link link-hover">
              {link.name}
            </Link>
          ))}
        </nav>

        <nav>
          <h6 className="footer-title text-lg">Company</h6>
          {services.map((link, index) => (
            <Link to={link.url} key={index} className="link link-hover">
              {link.name}
            </Link>
          ))}
        </nav>

        <nav>
          <h6 className="footer-title text-lg">Support</h6>
          {supports.map((link, index) => (
            <Link to={link.url} key={index} className="link link-hover">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
