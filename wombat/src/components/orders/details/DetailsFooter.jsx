import { Button, Text } from "../../index.js";
import { toDecimal } from "../ordersHelper.jsx";

const DetailsFooter = ({ paymentMethod, totalPrice, orderNotes, status }) => {
  const labelBy = {
    0: "Confirm",
    1: "Send The Package",
    2: "Completed",
  };

  return (
    <div className=" rounded bg-pGray-500 border border-pBorder-100 h-fit">
      <div className="flex flex-row justify-between items-center px-3 py-2 border-b border-pBorder-100 text-xs font-normal text-pGray-900 font-medium first-letter: ">
        <span>{paymentMethod ?? ""}</span>
        <div className="flex flex-row items-center pr-2">
          <Text className="text-xs font-normal text-pGray-900 font-medium">
            General Total:
          </Text>
          <div className="text-xl text-end font-extrabold text-pGray-900 min-w-[120px]">
            {toDecimal(totalPrice ?? 0) + " TL"}
          </div>
        </div>
      </div>

      <div className="flex items-center p-3 gap-3 bg-pGray-550">
        <div className="flex flex-col items-start rounded bg-white rounded w-3/5 min-h-[90px] h-full text-xs font-normal text-pGray-900 font-medium">
          <Text className="py-1 px-2 text-white bg-pRed-500 max-w-[180px] w-full rounded-tl rounded-br ">
            Order Notes
          </Text>

          <span className="p-2">{orderNotes ?? ""}</span>
        </div>

        <div className="flex flex-col w-2/5 gap-2">
          <Button className=" bg-pGray-100 hover:bg-blue-300 rounded w-full px-6 py-2 text-center border border-pBlue-600">
            Print
          </Button>

          <div className="flex gap-2">
            <Button className=" bg-red-200 hover:bg-pRed-200 rounded w-fit px-6 py-2 text-center border border-pRed-500">
              Cancel
            </Button>

            <Button className=" bg-pGreen-100 hover:bg-pGreen-300 rounded w-full px-6 py-2 text-center border border-pGreen-500">
              {labelBy[status]}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsFooter;
