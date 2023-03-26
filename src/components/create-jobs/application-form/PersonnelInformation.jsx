import Text from "../../Text.jsx";
import names from "../create-jobs-names.jsx";

const PersonnelInformation = () => {
  return (
    <div className="white-card">
      <Text className="title">{names.personnel_information.name}</Text>

      <div className="flex w-full gap-3">
        <div className="space-y-2 flex-1">
          <Text className="label">{names.full_name.name}</Text>
          <input
            className="input-gray"
            type="text"
            placeholder={names.full_name.placeholder}
          />
        </div>

        <div className="space-y-2 flex-1">
          <Text className="label">{names.email.name}</Text>
          <input
            type="text"
            className="input-gray"
            placeholder={names.email.placeholder}
          />
        </div>
        <div className="space-y-2 flex-1">
          <Text className="label">{names.phone.name}</Text>
          <input
            type="text"
            className="input-gray"
            placeholder={names.phone.placeholder}
          />
        </div>
      </div>

      <div className="flex w-full gap-3">
        <div className="space-y-2 flex-1">
          <Text className="label">{names.photo.name}</Text>
          <input
            type="text"
            className="input-gray"
            placeholder={names.photo.placeholder}
          />
        </div>

        <div className="space-y-2 flex-1">
          <Text className="label">{names.location.name}</Text>
          <input
            type="text"
            className="input-gray"
            placeholder={names.location.placeholder}
          />
        </div>
        <div className="space-y-2 flex-1">
          <Text className="label">{names.cover_letter.name}</Text>
          <input
            type="text"
            className="input-gray"
            placeholder={names.cover_letter.placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonnelInformation;
