import { Text } from "../../index.js";
import { toDecimal } from "../ordersHelper.jsx";

const BasketTotal = ({ products, discount, moneyPoint, total }) => {
  const containerClassName = "flex flex-row items-center";
  const descClassName = "text-xs font-normal text-pGray-900";
  const priceClassName =
    "text-lg text-end font-bold text-pGray-900 min-w-[120px]";

  return (
    <div className="flex flex-col items-end w-full px-2 py-3 border border-pBorder-100 bg-pGray-100 rounded mb-2">
      <div className={containerClassName}>
        <Text className={descClassName}>Basket Total:</Text>
        <div className={priceClassName}>{toDecimal(total) + " TL"}</div>
      </div>

      <div className={containerClassName}>
        <Text className={descClassName}>Instant Discount:</Text>
        <div className={priceClassName}>
          {(toDecimal(discount) ?? 0) + " TL"}{" "}
        </div>
      </div>

      <div className={containerClassName}>
        <Text className={descClassName}>MoneyPoints Used:</Text>
        <div className={priceClassName}>
          {(toDecimal(moneyPoint) ?? 0) + " TL"}{" "}
        </div>
      </div>
    </div>
  );
};

export default BasketTotal;
