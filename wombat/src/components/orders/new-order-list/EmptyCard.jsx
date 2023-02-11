import { Text } from "../../index.js";
import clsx from "clsx";

const EmptyCard = ({ status }) => {
  return (
    <div className="flex items-center justify-center border-t-4 border rounded bg-pGray-75 h-[202px]">
      <Text className="text-lg font-bold text-center max-w-[200px] w-full">
        {clsx({
          "No New Orders": status === 0,
          "No Preparing Orders": status === 1,
          "No On The Way Orders": status === 2,
        })}
      </Text>
    </div>
  );
};

export default EmptyCard;
