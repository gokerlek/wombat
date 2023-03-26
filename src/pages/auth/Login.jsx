import { Button, Icon, Text } from "../../components/index";
import names from "./auth-names.jsx";
import clsx from "clsx";
import useToggle from "../../hooks/useToggle.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths.js";

const Login = () => {
  const navigate = useNavigate();

  const route_to_sign_up = () => {
    navigate(paths.signup);
  };

  const route_to_forgot_password = () => {
    navigate(paths.forgot_password);
  };

  const [show, setShow] = useToggle(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-fit flex flex-col gap-6">
      <Text className="big-title">hey, hello!</Text>

      <div className="inline-flex gap-1 items-center w-full">
        <Text className="text-lg font-normal text-gray-800">
          Don’t have a company account?
        </Text>
        <Text
          onClick={route_to_sign_up}
          className="capitalize underline cursor-pointer hover:underline-offset-1 text-lg font-semibold text-cyan-500"
        >
          create now
        </Text>
      </div>

      <form className={`flex flex-col gap-6`}>
        <div className="flex flex-col gap-2">
          <Text className="label">{names.email.name}</Text>

          <input
            type="email"
            placeholder={names.email.placeholder}
            className={clsx("input-gray", {
              invalid: !!errors.email,
            })}
            {...register(names.email.name, { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <Text className="label">{names.password.name}</Text>

            <Text
              onClick={route_to_forgot_password}
              className="text-sm text-gray-500 hover:text-gray-600 cursor-pointer capitalize"
            >
              forgot your password?
            </Text>
          </div>

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder={names.password.placeholder}
              className={clsx("input-gray", {
                invalid: !!errors.password,
              })}
              {...register(names.password.name, { required: true })}
            />

            <Icon
              purpose={clsx({ hide: !show }, "eye")}
              onClick={setShow}
              className="absolute right-3 inset-y-0 cursor-pointer flex items-center justify-center"
            />
          </div>
        </div>
      </form>

      <Button height={52} purpose="cyan" onClick={handleSubmit(onSubmit)}>
        login
      </Button>
    </div>
  );
};

export default Login;
