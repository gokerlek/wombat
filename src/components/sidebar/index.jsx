import NavLinks from "./NavLinks.jsx";

const Sidebar = ({ isOpen }) => {
  return (
    <div className="relative  w-fit py-7 px-3 bg-white">
      <NavLinks isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
