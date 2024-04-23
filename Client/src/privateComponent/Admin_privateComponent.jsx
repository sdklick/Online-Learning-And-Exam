import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Admin_privateComponent = () => {
  const auth = localStorage.getItem("admin");
  return auth ? <Navigate to="/adminpage" /> : <Outlet />;
};

export default Admin_privateComponent;
