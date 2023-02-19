import CandidateDetails from "./CandidateDetails.jsx";
import Actions from "./Actions.jsx";

const JobsHeader = () => {
  return (
    <div className="mx-[-28px] mt-[-28px] p-7 bg-white flex items-start justify-between">
      <CandidateDetails />
      <Actions />
    </div>
  );
};

export default JobsHeader;
