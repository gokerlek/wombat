import Icon from "../../Icon.jsx";
import Text from "../../Text.jsx";

const JobsInfo = ({ data }) => {
  const { working_time_model, location, salary, closing_date, recruiter } =
    data ?? {};

  return (
    <div className="flex flex-row items-center gap-4 min-w-fit flex-wrap">
      <div className="flex w-fit items-center gap-2.5 capitalize">
        <Icon purpose="clock" />
        <div className="text-xs font-normal text-gray-900">
          {working_time_model}
        </div>
      </div>
      <div className="flex w-fit items-center gap-2.5 capitalize">
        <Icon purpose="marker" />
        <div className="text-xs font-normal text-gray-900">{location}</div>
      </div>
      <div className="flex w-fit items-center gap-2.5 capitalize">
        <Icon purpose="salary" />
        <div className="text-xs font-normal text-gray-900"> {salary} </div>
      </div>
      <div className="flex w-fit items-center gap-2.5 capitalize">
        <Icon className="w-3.5" purpose="calendar" />
        <Text
          searchTerms={"**date**"}
          changeTerms={closing_date}
          className="text-xs font-normal text-gray-900"
        >
          closing on
        </Text>
      </div>
      <div className="flex w-fit items-center gap-2.5 capitalize">
        <Icon purpose="recruiter" />
        <div className="text-xs font-normal text-gray-900">{recruiter}</div>
      </div>
    </div>
  );
};

export default JobsInfo;
