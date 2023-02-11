import { Text } from "../../index.js";
import ProductCard from "./ProductCard.jsx";
import BasketTotal from "./BasketTotal.jsx";

const OrderList = ({ products, discount, moneyPoint, total }) => {
  return (
    <div className="bg-white rounded border-t-4 border-pBorder-500 border-x border-b h-96 space-y-3 px-3 pb-3 overflow-y-scroll ">
      <Text className=" font-semibold text-pGray-900 text-center w-full my-3">
        Order Details
      </Text>

      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}

      <BasketTotal
        products={products}
        total={total}
        discount={discount}
        moneyPoint={moneyPoint}
      />
    </div>
  );
};

export default OrderList;
