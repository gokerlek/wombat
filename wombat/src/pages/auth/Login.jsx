import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components/index.js";
import MaskedInput from "../../components/Input/MaskedInput.jsx";
import Text from "../../components/Text.jsx";
import Icon from "../../components/Icon.jsx";

const Login = () => {
  const { control, handleSubmit, register } = useForm();

  const navigate = useNavigate();

  const apply = (data) => {
    console.log(data);

    navigate("/code");
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
        <Text className="font-medium text-lg  ">My phone number</Text>
        <Text className="text-pGray-800 text-xs font-light">
          Enter your mobile phone number registered in the system.
        </Text>
      </div>

      <div className="flex flex-col p-6 gap-2">
        <div className="flex items-center justify-center mx-10 mb-3">
          <Icon purpose="sms" className="w-16" />
          <MaskedInput control={control} purpose="phone" register={register} />
        </div>

        <Button purpose="black" onClick={handleSubmit(apply)}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Login;
