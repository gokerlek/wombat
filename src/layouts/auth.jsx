import * as React from "react";
import { Outlet } from "react-router-dom";
import Icon from "../components/Icon.jsx";

const AuthLayout = () => {
  return (
    <div className=" grid grid-cols-2 w-screen h-screen">
      <div className="bg-gray-50">
        <Icon className="ml-20 mt-20 " purpose="logo" />
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-[400px] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
