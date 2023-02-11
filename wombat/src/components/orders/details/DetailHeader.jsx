import { Text } from "../../index.js";

const DetailHeader = ({ name, phone1, phone2, address }) => {
  const labelClassName = "text-xs font-normal text-pGray-700";

  const valueClassName = "text-sm font-medium text-pGray-700";

  return (
    <div className="flex divide-pBorder-100 divide-x border-x border-pBorder-100">
      <div className="w-[28%] py-1  px-2">
        <Text className={labelClassName}>Customer Name</Text>
        <Text className={valueClassName}>{name ?? "Mahmut Tuncer"}</Text>
      </div>

      <div className="w-[20%] py-1  px-2">
        <Text className={labelClassName}>Phone 1</Text>
        <Text className={valueClassName}>{phone1 ?? "Mahmut Tuncer"}</Text>
      </div>

      <div className="w-[20%] py-1  px-2">
        <Text className={labelClassName}>Phone 2</Text>
        <Text className={valueClassName}>{phone2 ?? "Mahmut Tuncer"}</Text>
      </div>

      <div className="w-[32%] py-1  px-2">
        <Text className={labelClassName}>Address</Text>
        <Text className={valueClassName}>{address ?? "Mahmut Tuncer"}</Text>
      </div>
    </div>
  );
};

export default DetailHeader;
