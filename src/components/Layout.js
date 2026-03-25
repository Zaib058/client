import React from "react";
import CustomNavbar from "./CustomNavbar";
import { Outlet } from "react-router-dom";

const Layout = ({ navbar = true }) => {
  return (
    <>
      {navbar && <CustomNavbar />}
      <div className="main-container">
        
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
