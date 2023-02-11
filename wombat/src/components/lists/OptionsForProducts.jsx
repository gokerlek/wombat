import { Checkbox, Icon, Select, Text } from "../index.js";
import { BatchOperationOptions } from "../pageInfo/helpers.jsx";

const OptionsForProducts = ({
  option,
  handleCheckbox,
  defaultStatusOption,
  handleSelect,
  index,
}) => {
  return (
    <>
      <div className="flex flex-col justify-between h-full ">
        <Text className="font-semibold">{option?.name}</Text>
        <div className="flex gap-5">
          <div className="font-bold text-sm bg-white py-1 px-2 rounded border border-gray-300">
            {option?.price + " TL"}
          </div>

          <div className="flex gap-2 items-center text-xs">
            <Icon purpose="likes" /> {option?.likes}
          </div>

          <div className="flex gap-2 items-center text-xs">
            <Icon purpose="stars" /> {option?.stars}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-between h-full">
        <div className="flex items-center justify-between px-2 h-[30px] w-[120px] rounded bg-pGray-400 text-left border border-gray-400">
          <Text className="text-black font-medium text-xs">Choose</Text>
          <Checkbox
            onChange={handleCheckbox(index)}
            isChecked={option?.isChoose}
            initialState={option?.isChoose}
            table={true}
          />
        </div>

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
      </div>
    </>
  );
};

export default OptionsForProducts;
