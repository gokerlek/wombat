import Text from "../../Text.jsx";
import Row from "./Row.jsx";
import BatchOperation from "./BatchOperation.jsx";
import Toggle from "../../buttons/Toggle.jsx";

const IngredientOptionsGeneralCondition = ({ update, data, setIsHidden }) => {
  const handleIngredients = (value) => {
    setIsHidden((prev) => ({ ...prev, ingredients: value }));
    console.log("handleIngredients", value); // TODO: buraya contexten malzemleri goster gizle fonksiyonu yazilacak
  };

  const handleOptions = (value) => {
    setIsHidden((prevState) => ({
      ...prevState,
      options: value,
    }));

    console.log("handleOptions", value); // TODO: buraya contexten seçenekleri goster gizle fonksiyonu yazilacak
  };

  return (
    <div className="flex flex-col justify-between  min-h-full min-w-[350px]">
      <div>
        <Text className="text-lg font-normal text-pGray-900  mb-4">
          General Condition
        </Text>

        <div className="flex w-full items-center justify-between">
          <Row title="Total Product" value={123} />

          <div className="w-32">
            <Text className="text-sm text-pGray-900 mb-2">Show / Hide</Text>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <Row title="Ingredients" value={15} />

          <div className="w-32">
            <Toggle
              closeColor="bg-[#3694dc]"
              openColor="bg-[#9fa6b2]"
              onClick={handleIngredients}
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <Row title="Sections" value={22} />

          <div className="w-32">
            <Toggle
              closeColor="bg-[#3694dc]"
              openColor="bg-[#9fa6b2]"
              onClick={handleOptions}
            />
          </div>
        </div>
      </div>

      <BatchOperation update={update} data={data} />
    </div>
  );
};

export default IngredientOptionsGeneralCondition;
