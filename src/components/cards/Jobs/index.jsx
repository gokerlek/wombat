import clsx from "clsx";
import JobsCardHeader from "./JobsCardHeader.jsx";
import CandidatesScore from "./CandidatesScore.jsx";
import Icon from "../../Icon.jsx";

const JobsCard = ({ jobs, setDraggable }) => {
  return (
    <div
      className={clsx(
        "relative rounded-lg bg-white hover:bg-gray-50 p-7 my-10 cursor-pointer border border-gray-200"
      )}
    >
      <Icon
        className="absolute top-1 right-1/2"
        onMouseDown={() => setDraggable(true)}
        onMouseUp={() => setDraggable(false)}
        purpose="drag"
      />
      <JobsCardHeader data={jobs} />
      <CandidatesScore data={jobs?.candidate_details} />
    </div>
  );
};

export default JobsCard;
