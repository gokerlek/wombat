import * as React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components/index.js";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen">
      <Header />

      <div className="flex flex-row w-screen h-[calc(100vh-84px)]">
        <Sidebar />

        <div className=" w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
