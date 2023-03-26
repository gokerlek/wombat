import { Button, Icon, Text } from "../../index.js";

const CandidatesInfo = () => {
  return (
    <div className="bg-cyan-50 rounded flex p-4 w-full gap-5">
      <Icon purpose="info_circle" className="text-cyan-700 min-w-fit" />
      <div className="flex flex-col gap-3 items-start">
        <Text className="text-gray-900 font-semibold">
          Review and rate the best matches
        </Text>
        <Text className="text-gray-900 font-light">
          As applicants come in, it’s easy to see and organize them all in one
          place. Filter, sort, and rate your applicants so you can focus on the
          best ones. And, when you rate an applicant a good fit, LinkedIn
          understands who you’re looking for and will recommend your job to
          similar people, making it easy to find the people you want to
          interview, faster.
        </Text>
        <div className="flex gap-3 items-center">
          <Button purpose="soft_cyan" rightIcon="right">
            learn more
          </Button>
          <Text className="text-cyan-500 font-semibold capitalize cursor-pointer hover:text-cyan-600">
            allow
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CandidatesInfo;
