import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/index.js";
import HEADER_TYPE from "../components/header/header-types.jsx";
const CreateLayout = () => {
  const navigate = useNavigate();
  const route_previous = () => {
    navigate(-1);
  };
  return (
    <div className="w-screen h-screen  ">
      <Header purpose={HEADER_TYPE.CREATE} icon_action={route_previous} />

      <Outlet />
    </div>
  );
};

export default CreateLayout;
