import { useForm } from "react-hook-form";
import { Button, Otp } from "../../components/index.js";
import Text from "../../components/Text.jsx";
import Icon from "../../components/Icon.jsx";
import { useNavigate } from "react-router-dom";

const Code = () => {
  const { control, handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const apply = (data) => {
    console.log(data);
    navigate("/branch-selection");
  };

  return (
    <div className="bg-white h-fit w-[400px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded m-5 divide-y">
      <div className="flex justify-center items-center p-6">
        <div className="flex items-center gap-2 h-10 w-fit pr-2 text-white font-bold bg-pGray-900 rounded">
          <Icon purpose="logo" className="w-10 h-10" />
          PAKETUS MUTFAK
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-1 py-3 text-pGray-800 text-xs font-light">
        <Text className="font-medium text-lg  ">SMS Confirmation Coder</Text>
        <Text className="text-pGray-800 text-xs font-light">
          Enter the 4-digit code sent to your mobile phone to log in.
        </Text>
      </div>

      <div className="flex flex-col p-6 gap-4 justify-center items-center">
        <div className="flex items-center justify-center mx-10">
          <Icon purpose="alarm" className="w-5 mr-1" />
          <div>00:00</div>
          <Icon purpose="refresh" className="w-5 ml-4 mr-1" />
          <Text className="text-pGray-800 text-xs font-bold underline">
            Resend
          </Text>
        </div>

        <Otp control={control} register={register} purpose="code" />

        <Button purpose="black" onClick={handleSubmit(apply)}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Code;
