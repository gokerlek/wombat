import { useState } from "react";
import { Button, Select, Text } from "../../index.js";
import { BatchOperationOptions } from "../helpers.jsx";

const BatchOperation = ({ update, data }) => {
  const [batchOperation, setBatchOperation] = useState(null);

  const handleSelect = (value) => {
    setBatchOperation(value);
  };

  const handleApply = () => {
    const newData = [...data];
    newData.forEach((item) => {
      item.options.forEach((option) => {
        if (option.isChoose) {
          option.status = batchOperation.id;
          option.isChoose = false;
        }
      });
    });
    update(newData);
  };

  return (
    <div className="bg-white rounded border border-gray-400 mt-2">
      <Text className="text-xs text-center font-semibold text-pGray-900   bg-pGray-400 border-b border-gray-400 py-1 rounded-t">
        Batch Operation
      </Text>
      <div className="flex items-center justify-between  py-3 px-2">
        <Text className="text-xs text-pGray-900">Selected Products:</Text>

        <Select
          options={BatchOperationOptions}
          placeholder="Choose Status"
          onChange={handleSelect}
          width="w-[120px]"
          height="h-[30px]"
          text="text-xs"
        />

        <Button purpose="black-border" onClick={handleApply}>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default BatchOperation;
