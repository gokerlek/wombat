import { Loading } from "../components/index.js";
import StatusViewer from "../components/orders/StatusViewer.jsx";
import NoOrders from "../components/orders/NoOrders.jsx";
import {
  dummyList,
  dummyCompletedOrdersList,
} from "../components/dummyData.js";
import ComplatedOrdersList from "../components/orders/complated-orders-list/index.jsx";

const Orders = ({ loading, error }) => {
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  const newOrderList = dummyList;

  const isEmptyNewOrderList = newOrderList?.length === 0;

  const complatedOrdersList = dummyCompletedOrdersList;

  const isEmptyComplatedOrdersList = complatedOrdersList?.length === 0;

  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="flex items-center justify-center w-full h-fit bg-pGray-400 mb-5">
        {isEmptyNewOrderList ? (
          <NoOrders purpose="new" />
        ) : (
          <StatusViewer list={newOrderList} />
        )}
      </div>

      <div className="flex items-center justify-center w-full h-fit bg-pGray-400 mb-5">
        {isEmptyComplatedOrdersList ? (
          <NoOrders purpose="complated" />
        ) : (
          <ComplatedOrdersList list={complatedOrdersList} />
        )}
      </div>
    </div>
  );
};

export default Orders;
