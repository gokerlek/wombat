import { Icon, Text } from "../../index.js";

const CandidateDetails = ({ company_name }) => {
  return (
    <div className="flex flex-col gap-2">
      <Text className="text-2xl font-gray-900 font-bold capitalize">
        my jobs
      </Text>

      <div className="flex gap-2.5 items-center">
        <Icon purpose="buildings" />

        <Text className="text-xs font-normal text-gray-700 capitalize">
          {company_name ?? "N/A"}
        </Text>
      </div>
    </div>
  );
};

export default CandidateDetails;
