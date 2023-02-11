import { Text } from "../../index.js";
import clsx from "clsx";

import EmptyCard from "./EmptyCard.jsx";
import OrderCard from "./OrderCard.jsx";

const OrderList = ({ status, list }) => {
  const isEmpty = list?.length === 0;

  return (
    <div className=" text-pGray-850 text-sm font-medium flex flex-col gap-3">
      <Text className="text-2xl font-bold text-center uppercase ">
        {clsx({
          New: status === 0,
          Preparing: status === 1,
          "On The Way": status === 2,
        })}
      </Text>

      <div className="flex flex-col gap-5 w-full h-full">
        {isEmpty ? (
          <EmptyCard status={status} />
        ) : (
          list?.map((item, index) => {
            return <OrderCard key={index} {...item} />;
          })
        )}
      </div>
    </div>
  );
};

export default OrderList;
