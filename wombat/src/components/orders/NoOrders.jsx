import Text from "../Text.jsx";

const NoOrders = ({ purpose }) => (
  <Text className="bg-white flex items-center justify-center h-40 my-20 w-[460px] text-pGray-700 font-semibold  text-xl border border-gray-400 rounded-lg ">
    {purpose === "new"
      ? "There are no new orders to display!"
      : "No orders completed today!"}
  </Text>
);

export default NoOrders;
