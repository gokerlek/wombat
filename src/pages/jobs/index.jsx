import JobsList from "../../components/jobs/JobsList.jsx";
import JobsHeader from "../../components/jobs/jobs-header";

const Jobs = () => {
  return (
    <div className="w-full min-w-[950px]">
      <JobsHeader />
      <JobsList />
    </div>
  );
};

export default Jobs;
