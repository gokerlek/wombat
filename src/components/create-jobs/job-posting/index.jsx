import JobInfo from "./JobInfo.jsx";
import JobDescriptions from "./JobDescriptions.jsx";
import SalaryInfo from "./SalaryInfo.jsx";
import { Tab } from "@headlessui/react";

const JobPosting = () => {
  return (
    <Tab.Panel>
      <div className="flex flex-col gap-5">
        <JobInfo />
        <JobDescriptions />
        <SalaryInfo />
      </div>
    </Tab.Panel>
  );
};

export default JobPosting;
