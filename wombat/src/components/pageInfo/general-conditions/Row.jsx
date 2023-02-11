import Text from "../../Text.jsx";

const Row = ({ title, value }) => {
  const listTitleClassName = "text-pGray-900 font-normal text-sm w-32";
  const listRowClassName =
    "flex items-center text-pGray-900 font-bold text-sm mb-2";

  return (
    <div className={listRowClassName}>
      <Text className={listTitleClassName}>{title}</Text> : {value ?? "-"}
    </div>
  );
};

export default Row;
