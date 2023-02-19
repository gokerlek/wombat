import * as React from "react";
import Icon from "../Icon.jsx";
import { Button } from "../index.js";
import SearchBar from "../search/index.jsx";

const Header = () => {
  return (
    <div className=" h-[84px] bg-white px-7 flex items-center justify-between border-b border-gray-100">
      <div className="font-semibold text-4xl">WOMBAT</div>

      <div className="flex flex-row items-center gap-4 ">
        <SearchBar />
        <Button purpose="cyan" fit rightIcon="plus" height={48}>
          create new job
        </Button>
        <Icon purpose="calendar" />
        <Icon purpose="bell" />
        <div className="w-[38px] h-[38px] rounded-full bg-cyan-500"></div>
      </div>
    </div>
  );
};

export default Header;
