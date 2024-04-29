import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "./../pages/Home/Home";
import Register from "./../pages/Register/Register";
import Login from "./../pages/Login/Login";

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
