import * as React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components/index.js";
import useToggle from "../hooks/useToggle.jsx";
const MainLayout = () => {
  const [status, toggleStatus] = useToggle(true);

  return (
    <div className="w-screen h-screen bg-gray-50 ">
      <Header toggleStatus={toggleStatus} />

      <div className="flex flex-row w-screen h-[calc(100vh-84px)]">
        <Sidebar isOpen={status} />

        <div className="w-full  p-7 rounded-t-2xl overflow-x-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
