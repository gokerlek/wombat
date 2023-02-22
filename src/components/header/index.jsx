import * as React from "react";
import Icon from "../Icon.jsx";
import { Button } from "../index.js";
import SearchBar from "../search/index.jsx";

const Header = ({ toggleStatus }) => {
  return (
    <div className=" h-[84px] bg-white pr-7 flex items-center justify-between ">
      <div className="font-semibold text-4xl min-w-[235px] h-full pl-7 flex items-center gap-5">
        <Icon purpose="hamburger" onClick={toggleStatus} />
        <Icon purpose="logo" />
      </div>

      <div className="flex flex-row items-center gap-4 h-full  flex-1 justify-end">
        <SearchBar />
        <Button purpose="cyan" fit rightIcon="plus" height={48}>
          create new job
        </Button>
        <Icon className="w-6" purpose="calendar" onClick={() => {}} />
        <Icon purpose="bell" onClick={() => {}} />
        <div className="w-[38px] h-[38px] rounded-full bg-cyan-500"></div>
      </div>
    </div>
  );
};

export default Header;
