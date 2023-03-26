import { useForm } from "react-hook-form";
import { Button, Text } from "../../components/index.js";
import names from "./auth-names.jsx";
import clsx from "clsx";
import ListBox from "../../components/buttons/ListBox.jsx";
import Checkbox from "../../components/buttons/Checkbox.jsx";
import TermsAndConditions from "../../components/TermsAndCondition.jsx";

const BeforeStarted = () => {
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
      <Text className="big-title">Before Started</Text>

      <Text className="text-lg font-normal text-gray-800">
        Could you tell us a bit about yourself
      </Text>

      <form className={`flex flex-col gap-6`}>
        <div className="flex flex-col gap-2">
          <Text className="label">{names.company_name.name}</Text>
          <input
            type="email"
            placeholder={names.company_name.placeholder}
            className={clsx("input-gray", {
              invalid: !!errors.company_name,
            })}
            {...register(names.company_name.name, { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Text className="label">{names.your_language.name}</Text>
          <ListBox className="input-gray" />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            label="
            Subscribe me to the bi-weekly Wombat newsletter about hiring and
            company culture."
          />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox custom_label={TermsAndConditions} />
        </div>
      </form>

      <Button height={52} purpose="cyan" onClick={handleSubmit(onSubmit)}>
        start your free trial
      </Button>
    </div>
  );
};

export default BeforeStarted;
