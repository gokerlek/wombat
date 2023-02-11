import { Loading } from "../components/index.js";
import InfoArea from "../components/pageInfo/InfoArea.jsx";
import ListOfRequiredDocuments from "../components/firm-profile/ListOfRequiredDocuments.jsx";
import AuthorizedAndContactInformation from "../components/firm-profile/AuthorizedAndContactInformation.jsx";
import MapInfo from "../components/firm-profile/MapInfo.jsx";
import { useForm } from "react-hook-form";
import { constants } from "../constants.js";

const FirmProfile = ({ data, loading, error }) => {
  if (loading) return <Loading />;

  if (error) return <p>Error: {error.message}</p>;

  const { register, control } = useForm();

  return (
    <div className="absolute inset-0 pb-10 overflow-y-auto">
      <InfoArea purpose={constants.firmProfile} title="Firm Profile" />

      <ListOfRequiredDocuments />

      <AuthorizedAndContactInformation control={control} register={register} />

      <MapInfo />
    </div>
  );
};

export default FirmProfile;
