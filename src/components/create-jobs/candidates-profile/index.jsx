import { Tab } from "@headlessui/react";
import Candidates from "./Candidates.jsx";
import Competencies from "./Competencies.jsx";
import TechnicalSkills from "./TechnicalSkills.jsx";

const CandidatesProfile = () => {
  return (
    <Tab.Panel>
      <div className="flex flex-col gap-5">
        <Candidates />
        <Competencies />
        <TechnicalSkills />
      </div>
    </Tab.Panel>
  );
};

export default CandidatesProfile;
