import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "./../pages/Home/Home";
import Register from "./../pages/Register/Register";
import Login from "./../pages/Login/Login";
import About from "../pages/About/About";
import Services from "./../pages/Services/Services";
import Blog from "../pages/Blog/Blog";
import Contact from "./../pages/Contact/Contact";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2>Error</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routers;
