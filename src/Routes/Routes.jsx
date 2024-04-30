import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from './../pages/AboutPage/AboutPage';
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import BlogPage from './../pages/BlogPage/BlogPage';
import ContactPage from "../pages/ContactPage/ContactPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2>Error</h2>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage/>,
      },
      {
        path: "/services",
        element: <ServicesPage/>,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default routers;
