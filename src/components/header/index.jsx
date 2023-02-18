import * as React from "react";
import Icon from "../Icon.jsx";

const Header = () => {
  return (
    <div className=" h-[84px] bg-white shadow-sm px-7 flex items-center justify-between">
      <div>WOMBAT</div>
      <div className="flex items-center gap-4 ">
        <Icon purpose="calendar" />
        <Icon purpose="bell" />
        <div className="w-[38px] h-[38px] rounded-full bg-red-200"></div>
      </div>
    </div>
  );
};

export default Header;
