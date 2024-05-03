import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <span className="loading loading-lg loading-spinner"></span>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"} />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
