import { Text } from "../../index.js";
import { toDecimal } from "../ordersHelper.jsx";

const ProductCard = ({
  product,
  ingredients,
  productNote,
  price,
  quantity,
}) => {
  return (
    <div className="flex rounded bg-pGray-75 border-pBorder-500 border w-full h-fit px-2 py-3">
      <div className="flex items-center justify-start w-[45%] text-sm font-medium">
        {product ?? ""}
      </div>

      <div className="flex flex-col justify-between gap-1 w-[30%] border-x border-pBorder-100 px-3 pt-2 ">
        <div className="flex flex-col gap-1 pb-2 ">
          {ingredients?.map((ingredient, index) => (
            <div className="flex gap-2 items-center text-xs" key={index}>
              <div className="min-w-[6px] h-1.5 rounded-full bg-gray-400"></div>
              {ingredient}
            </div>
          ))}
        </div>
        {!!productNote && (
          <div className="flex gap-1 text-xs mt-3">
            <Text className="text-pRed-450  font-extrabold">Product Note:</Text>
            {productNote}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-center w-[10%]">
        <span className="text-xs font-medium">
          {(toDecimal(price) ?? 0) + " TL"}
        </span>
        <span className="text-sm font-bold">X</span>
        <span className="text-xl font-bold">{quantity ?? 1}</span>
      </div>

      <div className="flex items-center justify-center w-[15%] text-lg font-bold border-l border-pBorder-100">
        {toDecimal((price ?? 0) * (quantity ?? 1)) + " TL"}
      </div>
    </div>
  );
};

export default ProductCard;
