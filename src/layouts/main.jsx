import * as React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components/index.js";
import { useGeneral } from "../context/GeneralProvider.jsx";
import clsx from "clsx";
const MainLayout = ({ full }) => {
  const { open_sidebar, toggleSidebar } = useGeneral();
  return (
    <div className="w-screen h-screen  ">
      <Header icon_action={toggleSidebar} />

      <div className="flex flex-row w-screen h-[calc(100vh-84px)]">
        <Sidebar isOpen={open_sidebar} />

        <div
          className={clsx("w-full rounded bg-gray-50 rounded-tl-2xl", {
            "px-7 pt-7": full,
            "p-7": !full,

            "w-[calc(100vw-288px)]": open_sidebar,
            "w-[calc(100vw-134px)]": !open_sidebar,
          })}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
