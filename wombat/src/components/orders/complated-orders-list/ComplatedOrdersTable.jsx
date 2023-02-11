import { Text } from "../../index.js";

const ComplatedOrdersTable = ({ list }) => {
  return (
    <div className="w-full text-xs">
      <table className="w-full ">
        <thead>
          <tr>
            <th className="w-[15%]">
              <Text className="w-full text-start border-pBorder-100 border-r-[1px] mb-2 py-2 px-2">
                Name
              </Text>
            </th>

            <th className="w-[22%]">
              <Text className="w-full text-start border-pBorder-100 border-r-[1px] mb-2 py-2 px-2">
                Address
              </Text>
            </th>

            <th className="w-[9%]">
              <Text className="w-full border-pBorder-100 border-r-[1px] mb-2 py-2 px-1">
                Elapse Time
              </Text>
            </th>

            <th className="w-[9%]">
              <Text className="w-full border-pBorder-100 border-r-[1px] mb-2 py-2 px-1">
                Payment Method
              </Text>
            </th>

            <th className="w-[9%]">
              <Text className="w-full border-pBorder-100 border-r-[1px] mb-2 py-2 px-1">
                Amount
              </Text>
            </th>

            <th className="w-[9%]">
              <Text className="w-full border-pBorder-100 border-r-[1px] mb-2 py-2 px-1">
                Order Time
              </Text>
            </th>

            <th className="w-[9%]">
              <Text className="w-full border-pBorder-100 border-r-[1px] mb-2 py-2 px-1">
                Check Time
              </Text>
            </th>

            <th className="w-[9%]">
              <Text className="w-full border-pBorder-100 border-r-[1px] mb-2 py-2 px-1">
                Deliver Time
              </Text>
            </th>

            <th className="w-[9%]">
              <Text className="w-full border-pBorder-100 border-r-[1px] mb-2 py-2 px-1">
                Order Number
              </Text>
            </th>
          </tr>
        </thead>

        <tbody className="border-[1px] border-b-pBorder-100">
          {list.map(
            (
              {
                name,
                address,
                elapsedTime,
                amount,
                paymentMethod,
                orderTime,
                checkTime,
                deliverTime,
                orderId,
              },
              index
            ) => {
              return (
                <tr key={index}>
                  <td className="p-0 border-pBorder-100 border-t-[1px] ">
                    <div className="border-pBorder-100 border-r-[1px] my-2.5 py-2 text-start px-2">
                      {name}
                    </div>
                  </td>

                  <td className="p-0 border-pBorder-100 border-t-[1px]">
                    <div className="border-pBorder-100 border-r-[1px] my-2.5 py-2 text-start truncate px-2">
                      {address}
                    </div>
                  </td>

                  <td className="p-0 border-pBorder-100 border-t-[1px]">
                    <div className="border-pBorder-100 border-r-[1px] my-2.5 py-2 px-2.5 text-center">
                      <div className="bg-pOrange-700 text-white font-medium rounded w-full py-1">
                        {elapsedTime}
                      </div>
                    </div>
                  </td>

                  <td className="p-0 border-pBorder-100 border-t-[1px]">
                    <div className="border-pBorder-100 border-r-[1px] my-2.5 py-2 text-center">
                      {paymentMethod}
                    </div>
                  </td>

                  <td className="p-0 border-pBorder-100 border-t-[1px]">
                    <div className="border-pBorder-100 border-r-[1px] my-2.5 py-2 text-center">
                      {amount}
                    </div>
                  </td>

                  <td className="p-0 border-pBorder-100 border-t-[1px]">
                    <div className="border-pBorder-100 border-r-[1px] my-2.5 py-2 text-center">
                      {orderTime}
                    </div>
                  </td>

                  <td className="p-0 border-pBorder-100 border-t-[1px]">
                    <div className="border-pBorder-100 border-r-[1px] my-2.5 py-2 text-center">
                      {checkTime}
                    </div>
                  </td>

                  <td className="p-0 border-pBorder-100 border-t-[1px]">
                    <div className="border-pBorder-100 border-r-[1px] my-2.5 py-2 text-center">
                      {deliverTime}
                    </div>
                  </td>

                  <td className="p-0 border-pBorder-100 border-t-[1px]">
                    <div className="border-pBorder-100 border-r-[1px] my-2.5 py-2 text-center">
                      {orderId}
                    </div>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ComplatedOrdersTable;
