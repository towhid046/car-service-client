import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "./../pages/AboutPage/AboutPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import BlogPage from "./../pages/BlogPage/BlogPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Checkout from "./../pages/Checkout/Checkout";
import NotFoundPage from "./../pages/NotFoundPage/NotFoundPage";
import CartDetails from "../pages/CartDetails/CartDetails";
import PrivateRoute from "./PrivateRoute";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
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
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/cartDetails",
        element: (
          <PrivateRoute>
            <CartDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routers;
