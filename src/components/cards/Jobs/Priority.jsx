import { Icon, Text } from "../../index.js";
import clsx from "clsx";

const Priority = ({ priority }) => {
  return (
    <div
      className={clsx(
        "flex items-center rounded-full py-1.5 pl-1.5 pr-2.5 gap-1",
        {
          "bg-green-50 text-green-500": priority === "high",
          "bg-yellow-50 text-yellow-500": priority === "medium",
          "bg-red-50 text-red-500": priority === "low",
          "bg-gray-50 text-gray-500": priority === "N/A",
        }
      )}
    >
      <Icon purpose="stars" />
      <Text className="text-xs font-medium capitalize">{priority}</Text>
    </div>
  );
};

export default Priority;
