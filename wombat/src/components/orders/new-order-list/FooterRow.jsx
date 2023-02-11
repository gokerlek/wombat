import clsx from "clsx";

const FooterRow = ({ address, paymentType, status }) => {
  return (
    <div className="flex flex-row justify-between px-4 ">
      <div
        className={clsx("w-3/5 truncate border-r py-4 pr-2 ", {
          "border-pRed-600": status === 0,
          "border-pYellow-600": status === 1,
          "border-pGreen-600": status === 2,
        })}
      >
        {address}
      </div>

      <div className="w-2/5 truncate text-end py-4">{paymentType}</div>
    </div>
  );
};

export default FooterRow;
