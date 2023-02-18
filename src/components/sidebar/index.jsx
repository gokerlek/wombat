import { useState } from "react";
import NavLinks from "./NavLinks.jsx";
import { Icon } from "../index.js";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="relative shadow w-fit py-7 pl-7 pr-3">
      <NavLinks isOpen={isOpen} />

      <Icon
        purpose={isOpen ? "left" : "right"}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-5 right-5 transform -translate-y-1/2"
      />
    </div>
  );
};

export default Sidebar;
