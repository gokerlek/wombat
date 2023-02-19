import clsx from "clsx";
import JobsCardHeader from "./JobsCardHeader.jsx";
import CandidatesScore from "./CandidatesScore.jsx";

const JobsCard = ({ jobs }) => {
  return (
    <div className={clsx("rounded-lg bg-white p-7")}>
      <JobsCardHeader data={jobs} />
      <CandidatesScore data={jobs.candidate_details} />
    </div>
  );
};

export default JobsCard;
