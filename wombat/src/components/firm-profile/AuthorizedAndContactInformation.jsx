import { Input } from "../index.js";
import MaskedInput from "../Input/MaskedInput.jsx";
import SectionHeader from "./SectionHeader.jsx";

const AuthorizedAndContactInformation = ({ control, register }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <SectionHeader>Authorized and Contact Information</SectionHeader>

      <div className="flex w-5/6 ">
        <div className="flex flex-col gap-2 w-full border-r border-pBorder-200 pr-5">
          <Input
            purpose="signName"
            control={control}
            register={register}
            styleType="firmProfile"
          />

          <Input
            purpose="officialTitle"
            control={control}
            register={register}
            styleType="firmProfile"
          />
          <MaskedInput
            purpose="TCKN"
            control={control}
            register={register}
            styleType="firmProfile"
            format={"###########"}
          />

          <MaskedInput
            purpose="mersisNo"
            control={control}
            register={register}
            styleType="firmProfile"
            format={"#### #### #### ####"}
          />

          <Input
            purpose="kepAddress"
            control={control}
            register={register}
            styleType="firmProfile"
          />

          <MaskedInput
            purpose="IBAN"
            control={control}
            register={register}
            styleType="firmProfile"
            format={"TR ## #### #### #### #### #### ##"}
          />
        </div>

        <div className="flex flex-col gap-2 w-full pl-5">
          <Input
            purpose="officerNameSurname"
            control={control}
            register={register}
            styleType="firmProfile"
          />

          <MaskedInput
            purpose="officerPhoneNumber"
            control={control}
            register={register}
            styleType="firmProfile"
            format={"(###) ### ## ##"}
          />

          <Input
            purpose="branchOfficer"
            control={control}
            register={register}
            styleType="firmProfile"
          />

          <MaskedInput
            purpose="landPhone"
            control={control}
            register={register}
            styleType="firmProfile"
            format={"(###) ### ## ##"}
          />

          <MaskedInput
            purpose="fax"
            control={control}
            register={register}
            styleType="firmProfile"
            format={"(###) ### ## ##"}
          />

          <Input
            purpose="email"
            control={control}
            register={register}
            styleType="firmProfile"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorizedAndContactInformation;
