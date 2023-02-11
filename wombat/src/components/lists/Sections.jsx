import { BatchOperationOptions } from "../pageInfo/helpers.jsx";
import OptionsForProducts from "./OptionsForProducts.jsx";
import OptionsForIngredients from "./OptionsForIngredients.jsx";
import { constants } from "../../constants.js";
import clsx from "clsx";

const Sections = ({ section, name, options, update, data }) => {
  // Conditions
  const isProductManagement = name === constants.productManagement;
  const isIngredientOptions = name === constants.ingredientOptions;

  const handleSelect = (index) => (value) => {
    const newData = [...data];
    newData[section].options[index].status = value.id;
    update(newData);
  };

  const handleCheckbox = (index) => (value) => {
    const newData = [...data];
    newData[section].options[index].isChoose = value;
    update(newData);
  };

  const defaultStatusOption = (index) =>
    BatchOperationOptions.find((item) => item.id === options[index]?.status);

  return (
    <div className="grid grid-cols-2 gap-y-7 gap-x-10  w-full h-fit">
      {options?.map((option, index) => (
        <div
          key={index}
          className={clsx(
            "flex items-center bg-pGray-75 justify-between p-4 border rounded-lg border-gray-400 shadow-lg",
            { " min-h-[150px]": isProductManagement }
          )}
        >
          {isProductManagement && (
            <OptionsForProducts
              defaultStatusOption={defaultStatusOption}
              handleCheckbox={handleCheckbox}
              handleSelect={handleSelect}
              index={index}
              option={option}
            />
          )}

          {isIngredientOptions && (
            <OptionsForIngredients
              defaultStatusOption={defaultStatusOption}
              handleCheckbox={handleCheckbox}
              handleSelect={handleSelect}
              index={index}
              option={option}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Sections;
