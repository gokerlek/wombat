import CandidateDetails from "./CandidateDetails.jsx";
import Actions from "./Actions.jsx";

const JobsHeader = () => {
  return (
    <div className="p-7 bg-white flex items-start justify-between rounded-t-lg  w-[calc(100vw-288px)] ">
      <CandidateDetails />
      <Actions />
    </div>
  );
};

export default JobsHeader;
