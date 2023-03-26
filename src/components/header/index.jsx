import * as React from "react";
import Icon from "../Icon.jsx";
import HEADER_TYPE from "./header-types.jsx";
import DefaultItems from "./DefaultItems.jsx";
import CreateItems from "./CreateItems.jsx";

const Header = ({ icon_action, purpose = HEADER_TYPE.DEFAULT }) => {
  const is_default = purpose === HEADER_TYPE.DEFAULT;
  const is_create = purpose === HEADER_TYPE.CREATE;

  return (
    <div className=" h-[84px] bg-white pr-7 flex items-center justify-between ">
      <div className="flex items-center gap-5 font-semibold text-4xl min-w-[235px] h-full pl-7 ">
        {is_default && <Icon purpose="hamburger" onClick={icon_action} />}
        {is_create && (
          <Icon
            className="hover:text-cyan-500  text-gray-900 "
            purpose="arrow-left"
            onClick={icon_action}
          />
        )}
        <Icon purpose="logo" />
      </div>

      <div className="flex flex-row items-center gap-4 h-full  flex-1 justify-end">
        {is_default && <DefaultItems />}
        {is_create && <CreateItems />}
      </div>
    </div>
  );
};

export default Header;
