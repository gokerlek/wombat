import { Checkbox, Select, Text } from "../index.js";
import { BatchOperationOptions } from "../pageInfo/helpers.jsx";

const OptionsForIngredients = ({
  option,
  handleSelect,
  defaultStatusOption,
  handleCheckbox,
  index,
}) => {
  return (
    <>
      <Text>{option?.name}</Text>
      <div className="flex gap-4 items-center">
        <Select
          options={BatchOperationOptions}
          placeholder="Choose Status"
          onChange={handleSelect(index)}
          width="w-[120px]"
          height="h-[30px]"
          text="text-xs"
          defaultValue={defaultStatusOption(index)}
          value={option?.status}
          outsideClick
        />

        <div className="flex items-center justify-between px-2 h-[30px] w-[120px] rounded bg-pGray-400 text-left border border-gray-400">
          <Text className="text-black font-medium text-xs">Choose</Text>
          <Checkbox
            onChange={handleCheckbox(index)}
            isChecked={option?.isChoose}
          />
        </div>
      </div>
    </>
  );
};

export default OptionsForIngredients;
