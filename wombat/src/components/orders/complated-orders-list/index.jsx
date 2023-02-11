import { Text } from "../../index.js";
import ComplatedOrdersTable from "./ComplatedOrdersTable.jsx";
const ComplatedOrdersList = ({ list }) => {
  return (
    <div className="flex flex-col w-full h-full py-5 gap-5">
      <Text className="text-2xl font-bold text-center uppercase ">
        Completed Orders
      </Text>

      <ComplatedOrdersTable list={list} />
    </div>
  );
};

export default ComplatedOrdersList;
