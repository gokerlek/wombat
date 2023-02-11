import { useState, useCallback } from "react";
import clsx from "clsx";
import HeaderRow from "./HeaderRow.jsx";
import CenterRow from "./CenterRow.jsx";
import FooterRow from "./FooterRow.jsx";
import { OrderModal } from "../../index.js";

const OrderCard = ({ address, name, paymentType, time, total, status, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div
        onClick={openModal}
        className={clsx(
          "flex flex-col border-t-4 border rounded bg-pGray-75 hover:bg-white cursor-pointer hover:shadow-lg transition-all duration-300",
          {
            "border-pRed-600": status === 0,
            "border-pYellow-600": status === 1,
            "border-pBlue-600": status === 2,
          }
        )}
      >
        <HeaderRow name={name} total={total} />

        <CenterRow status={status} time={time} id={id} />

        <FooterRow
          address={address}
          paymentType={paymentType}
          status={status}
        />
      </div>

      {/** MODAL */}
      <OrderModal
        isOpen={isOpen}
        closeModal={closeModal}
        loading={false}
        status={status}
      />
    </>
  );
};

export default OrderCard;
