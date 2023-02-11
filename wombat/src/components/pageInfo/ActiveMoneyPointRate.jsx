import { useState } from "react";
import { Button, Text, Select } from "../index.js";
import { ActiveMoneyPointRateOptions } from "./helpers.jsx";

const ActiveMoneyPointRate = () => {
  const [pointRate, setPointRate] = useState(null);

  const handleSelect = (value) => {
    setPointRate(value);
  };

  const defaultOption = ActiveMoneyPointRateOptions[5]; // TODO: get default option from backend

  return (
    <div className="flex min-h-full items-end ">
      <div className="flex flex-col gap-4 bg-white border-gray-900 border rounded-2xl min-w-[340px] h-fit  p-5">
        <div className="flex gap-1 items-center justify-center">
          <Text className="font-semibold">Active MoneyPoints Rate:</Text>
          <div className="font-semibold text-pRed-300">%12</div>
        </div>

        <div className="flex gap-2">
          <Select
            options={ActiveMoneyPointRateOptions}
            placeholder="MoneyPoints Rate"
            onChange={handleSelect}
            defaultValue={defaultOption}
          />
          <Button purpose="soft red">Update</Button>
        </div>
      </div>
    </div>
  );
};

export default ActiveMoneyPointRate;
