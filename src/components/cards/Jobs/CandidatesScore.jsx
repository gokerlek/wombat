import { Text } from "../../index.js";

const CandidatesScore = ({ data }) => {
  const { total, news, hired, other } = data ?? {};

  return (
    <div className="flex items-center gap-9 mt-4 ">
      <div className="flex flex-1 items-center justify-between  gap-9">
        <div className="flex items-center justify-start flex-1 gap-1 text-xl font-semibold border-r border-gray-400 pr-2 ">
          {total ?? "N/A"}
          <Text className={"text-lg font-medium text-gray-800 capitalize"}>
            all
          </Text>
        </div>
        <div className="flex items-center justify-start flex-1 gap-1  font-semibold border-r border-gray-400 pr-2 ">
          {news ?? "N/A"}
          <Text className={"text-sm font-medium text-gray-800 capitalize"}>
            new
          </Text>
        </div>
        {other?.map(({ count, title }, index) => (
          <div
            key={index}
            className="flex items-center justify-start flex-1 gap-1  font-semibold border-r border-gray-400 pr-2 "
          >
            {count ?? "N/A"}
            <Text className={"text-sm font-medium text-gray-800 capitalize"}>
              {title ?? "N/A"}
            </Text>
          </div>
        ))}
      </div>
      <div className="flex items-center bg-cyan-50 text-cyan-500 font-normal text-sm rounded px-3 h-[34px] w-36">
        {hired ?? "N/A"}
        <Text className=" mx-auto px-4 capitalize">hired</Text>
      </div>
    </div>
  );
};

export default CandidatesScore;
