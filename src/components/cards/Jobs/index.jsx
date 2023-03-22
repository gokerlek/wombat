import clsx from "clsx";
import JobsCardHeader from "./JobsCardHeader.jsx";
import CandidatesScore from "./CandidatesScore.jsx";
import { useNavigate } from "react-router-dom";
import paths from "../../../paths.js";

const JobsCard = ({ jobs }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(paths.jobs + "/" + jobs?.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className={clsx(
        "relative rounded-lg bg-white hover:bg-gray-50 p-7  cursor-pointer border border-gray-200"
      )}
    >
      <JobsCardHeader data={jobs} />
      <CandidatesScore data={jobs?.candidate_details} />
    </div>
  );
};

export default JobsCard;
