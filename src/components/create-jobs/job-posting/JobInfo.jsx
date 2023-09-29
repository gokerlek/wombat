import Text from "../../Text.jsx";
import names from "../create-jobs-names.jsx";
import ListBox from "../../buttons/ListBox.jsx";

const JobInfo = () => {
  return (
    <div className="white-card">
      <Text className="title">{names.job_title.name}</Text>

      <input
        className="input-gray max-w-xl"
        type="text"
        placeholder={names.job_title.placeholder}
      />

      <div className="flex w-full gap-3">
        <div className="space-y-2 flex-1">
          <Text className="label">{names.workplace_type.name}</Text>
          <ListBox placeholder={names.workplace_type.placeholder} />
        </div>

        <div className="space-y-2 flex-1">
          <Text className="label">{names.job_type.name}</Text>
          <ListBox placeholder={names.job_type.placeholder} />
        </div>
        <div className="space-y-2 flex-1">
          <Text className="label">{names.job_location.name}</Text>
          <ListBox placeholder={names.job_location.placeholder} />
        </div>
      </div>

      <div className="flex w-full gap-3">
        <div className="space-y-2 flex-1">
          <Text className="label">{names.seniority.name}</Text>
          <ListBox placeholder={names.seniority.placeholder} />
        </div>

        <div className="space-y-2 flex-1">
          <Text className="label">{names.industry.name}</Text>
          <ListBox placeholder={names.industry.placeholder} />
        </div>
        <div className="space-y-2 flex-1">
          <Text className="label">{names.function.name}</Text>
          <ListBox placeholder={names.function.placeholder} />
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
