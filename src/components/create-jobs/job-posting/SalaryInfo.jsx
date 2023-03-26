import Text from "../../Text.jsx";
import names from "../create-jobs-names.jsx";
import ListBox from "../../buttons/ListBox.jsx";

const SalaryInfo = () => {
  return (
    <div className="white-card">
      <Text className="title">{names.salary.name}</Text>
      <div className="flex w-full gap-3">
        <div className="space-y-2 flex-1">
          <Text className="label">{names.min.name}</Text>
          <input
            className="input-gray appearance-none"
            type="number"
            placeholder={names.min.placeholder}
          />
        </div>

        <div className="space-y-2 flex-1">
          <Text className="label">{names.max.name}</Text>
          <input
            className="input-gray"
            type="number"
            placeholder={names.max.placeholder}
          />
        </div>

        <div className="space-y-2 flex-[2]">
          <Text className="label">{names.period.name}</Text>
          <ListBox placeholder={names.period.placeholder} />
        </div>

        <div className="space-y-2 flex-[2]">
          <Text className="label">{names.currency.name}</Text>
          <ListBox placeholder={names.currency.placeholder} />
        </div>
      </div>
    </div>
  );
};

export default SalaryInfo;
