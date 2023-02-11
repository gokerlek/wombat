import Text from "../../Text.jsx";
import Row from "./Row.jsx";
import BatchOperation from "./BatchOperation.jsx";

const ProductManagementGeneralCondition = ({ update, data }) => {
  return (
    <div className="flex flex-col justify-between  min-h-full min-w-[350px]">
      <div>
        <Text className="text-lg font-normal text-pGray-900  mb-4">
          General Condition
        </Text>

        <Row title="Categories" value={14} />

        <Row title="Products" value={123} />

        <Row title="Drinks" value={15} />

        <Row title="Desserts" value={22} />
      </div>

      <BatchOperation update={update} data={data} />
    </div>
  );
};

export default ProductManagementGeneralCondition;
