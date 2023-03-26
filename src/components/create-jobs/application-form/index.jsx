import { Tab } from "@headlessui/react";
import CompetenciesQuestions from "./CompetenciesQuestions.jsx";
import TechnicalQuestions from "./TechnicalQuestions.jsx";
import PersonnelInformation from "./PersonnelInformation.jsx";

const ApplicationForm = () => {
  return (
    <Tab.Panel>
      <div className="flex flex-col gap-5">
        <PersonnelInformation />
        <CompetenciesQuestions />
        <TechnicalQuestions />
      </div>
    </Tab.Panel>
  );
};

export default ApplicationForm;
