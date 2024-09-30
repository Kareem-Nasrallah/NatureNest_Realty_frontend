import React, { useContext } from "react";
import { User } from "./UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const user = useContext(User);
  const location = useLocation();

  return user.value.userData ? (
    <Outlet />
  ) : (
    <Navigate state={{ from: location.pathname }} replace to="/Login" />
  );
};

export default RequireAuth;
