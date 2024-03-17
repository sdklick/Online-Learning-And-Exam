import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Admin_private_component = () => {
  const auth = localStorage.getItem("admin");
  return auth ? <Navigate to="/adminpage" /> : <Outlet />;
};

export default Admin_private_component;
