import { useState } from "react";
import NavLinks from "./NavLinks.jsx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="shadow w-fit py-7 pl-7 pr-3">
      <NavLinks isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
