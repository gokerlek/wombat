import Text from "../../Text.jsx";
import names from "../create-jobs-names.jsx";
import ListBox from "../../buttons/ListBox.jsx";
import CandidatesInfo from "./CandidatesInfo.jsx";

const Candidates = () => {
  return (
    <div className="white-card">
      <Text className="title">{names.candidates.name}</Text>
      <CandidatesInfo />

      <div className="flex w-full gap-3">
        <div className="space-y-2 flex-1">
          <Text className="label">{names.total_experience.name}</Text>
          <ListBox placeholder={names.total_experience.placeholder} />
        </div>

        <div className="space-y-2 flex-1">
          <Text className="label">{names.required_education.name}</Text>
          <ListBox placeholder={names.required_education.placeholder} />
        </div>
        <div className="space-y-2 flex-1">
          <Text className="label">{names.remote_experience.name}</Text>
          <ListBox placeholder={names.remote_experience.placeholder} />
        </div>
      </div>
    </div>
  );
};

export default Candidates;
