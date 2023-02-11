import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import DetailHeader from "../orders/details/DetailHeader.jsx";
import OrderList from "../orders/details/OrderList.jsx";
import { dummyOrderInfo } from "../dummyData.js";
import DetailsFooter from "../orders/details/DetailsFooter.jsx";

const OrderModal = ({ isOpen, closeModal, loading, status }) => {
  const orderInfo = dummyOrderInfo;
  const {
    orderList,
    detailHeaderInfo,
    orderNotes,
    paymentMethod,
    moneyPoint,
    discount,
  } = orderInfo ?? {};

  const total = orderList.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );

  const totalPrice = total - (moneyPoint ?? 0) - (discount ?? 0);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-x-0 top-20 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col gap-3 w-full max-w-4xl transform overflow-hidden rounded bg-pGray-75 p-6 text-left align-middle shadow-xl transition-all">
                <DetailHeader {...detailHeaderInfo} />

                <OrderList
                  products={orderList}
                  moneyPoint={moneyPoint}
                  discount={discount}
                  total={total}
                />

                <DetailsFooter
                  status={status}
                  orderNotes={orderNotes}
                  paymentMethod={paymentMethod}
                  totalPrice={totalPrice}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OrderModal;
