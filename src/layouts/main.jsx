import * as React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components/index.js";
import useToggle from "../hooks/useToggle.jsx";
const MainLayout = () => {
  const [status, toggleStatus] = useToggle(true);

  return (
    <div className="w-screen h-screen">
      <Header toggleStatus={toggleStatus} />

      <div className="flex flex-row w-screen h-[calc(100vh-84px)]">
        <Sidebar isOpen={status} />

        <div className=" w-full p-7 bg-gray-50 rounded-t-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
