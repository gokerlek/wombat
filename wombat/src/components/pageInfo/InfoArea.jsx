import { Text } from "../index.js";
import Info from "./Info.jsx";
import ActiveMoneyPointRate from "./ActiveMoneyPointRate.jsx";
import FirmNameAndImg from "./FirmNameAndImg.jsx";
import ProductManagementGeneralCondition from "./general-conditions/ProductManagementGeneralCondition.jsx";
import IngredientOptionsGeneralCondition from "./general-conditions/IngredientOptionsGeneralCondition.jsx";
import { constants } from "../../constants.js";

const InfoArea = ({ title, purpose, setIsHidden, isHidden, update, data }) => {
  const firmProfileCondition = purpose === constants.firmProfile;
  const productManagementCondition = purpose === constants.productManagement;
  const ingredientOptionsCondition = purpose === constants.ingredientOptions;

  console.log("datidna", data);

  return (
    <div className="flex  h-fit max-h-[800px] w-full bg-pBlue-100 border-b border-pGray-300 p-8">
      <div className="flex flex-col gap-2 w-full min-h-full justify-between">
        <Text className="text-2xl font-medium text-pGray-900">{title}</Text>

        {firmProfileCondition && <FirmNameAndImg />}

        <Info />
      </div>

      {firmProfileCondition && <ActiveMoneyPointRate />}

      {productManagementCondition && (
        <ProductManagementGeneralCondition update={update} data={data} />
      )}

      {ingredientOptionsCondition && (
        <IngredientOptionsGeneralCondition
          update={update}
          data={data}
          setIsHidden={setIsHidden}
          isHidden={isHidden}
        />
      )}
    </div>
  );
};

export default InfoArea;
