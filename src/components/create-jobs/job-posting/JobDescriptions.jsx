import Text from "../../Text.jsx";
import names from "../create-jobs-names.jsx";
import RichTextEditor from "../../rich-text-editor/index.jsx";

const JobDescriptions = () => {
  return (
    <div className="white-card">
      <Text className="title">{names.job_description.name}</Text>
      <RichTextEditor />

      <div className="space-y-2">
        <Text className="label">{names.qualifications.name}</Text>
        <RichTextEditor />
      </div>

      <div className="space-y-2">
        <Text className="label">{names.company_description.name}</Text>
        <RichTextEditor />
      </div>

      <div className="space-y-2">
        <Text className="label">{names.additional_information.name}</Text>
        <RichTextEditor />
      </div>
    </div>
  );
};

export default JobDescriptions;
