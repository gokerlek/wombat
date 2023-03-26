import { Button, Text } from "../../components/index";
import names from "./auth-names.jsx";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths.js";

const SignUp = () => {
  const navigate = useNavigate();

  const route_to_login = () => {
    navigate(paths.login);
  };

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
      <Text className="big-title">sign Up</Text>

      <div className="inline-flex gap-1 items-center w-full">
        <Text className="text-lg font-normal text-gray-800">
          Do you have already an account?
        </Text>

        <Text
          onClick={route_to_login}
          className="capitalize underline cursor-pointer hover:underline-offset-1 text-lg font-semibold text-cyan-500"
        >
          login
        </Text>
      </div>

      <form className={`flex flex-col gap-6`}>
        <div className="flex flex-col gap-2">
          <Text className="label">{names.full_name.name}</Text>

          <div className="flex items-center gap-2 w-full">
            <input
              type="email"
              placeholder={names.first_name.placeholder}
              className={clsx("input-gray", {
                invalid: !!errors.last_name,
              })}
              {...register(names.first_name.name, { required: true })}
            />

            <input
              type="email"
              placeholder={names.last_name.placeholder}
              className={clsx("input-gray", {
                invalid: !!errors.last_name,
              })}
              {...register(names.last_name.name, { required: true })}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Text className="label">{names.email.name}</Text>
          <input
            type="email"
            placeholder={names.email.placeholder2}
            className={clsx("input-gray", {
              invalid: !!errors.email,
            })}
            {...register(names.email.name, { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Text className="label">{names.password.name}</Text>
          <input
            type="password"
            placeholder={names.password.placeholder2}
            className={clsx("input-gray", {
              invalid: !!errors.password,
            })}
            {...register(names.password.name, { required: true })}
          />
        </div>
      </form>

      <Button height={52} purpose="cyan" onClick={handleSubmit(onSubmit)}>
        contunie with email
      </Button>
    </div>
  );
};

export default SignUp;
