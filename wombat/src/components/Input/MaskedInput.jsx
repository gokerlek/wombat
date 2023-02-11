import useInputValue from "../../hooks/useInputValue.js";
import { useController } from "react-hook-form";
import { Icon, Text } from "../index.js";
import { useTranslation } from "react-i18next";
import NumberFormat from "react-number-format";
import { style } from "./style.jsx";

const MaskedInput = ({
  purpose,
  control,
  disabled,
  darkLabel,
  register,
  styleType = "base",
  format = "(###) ### ## ##",
}) => {
  const { t } = useTranslation();

  const { name, label, placeholder, leftIcon, rightIcon, type } = useInputValue(
    purpose,
    t
  );

  const {
    fieldState: { error },
  } = useController({
    control,
    name: name,
  });

  const styleProps = {
    darkLabel: darkLabel,
    leftIcon: leftIcon,
    rightIcon: rightIcon,
    error: error,
    purpose: purpose,
  };

  const labelClassName = style(styleProps)[styleType].label;

  const inputClassName = style(styleProps)[styleType].input;

  return (
    <div className="flex flex-col w-full">
      <Text className={labelClassName}>{label}</Text>

      <label className="relative flex w-full ">
        {leftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Icon purpose={leftIcon} />
          </span>
        )}

        <NumberFormat
          mask=""
          format={format}
          type={type}
          className={inputClassName}
          placeholder={t(placeholder)}
          disabled={disabled}
          {...register(name)}
        />

        {rightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <Icon purpose={rightIcon} />
          </span>
        )}
      </label>
      {error && <span className="text-error text-xs  ">{error?.message}</span>}
    </div>
  );
};

export default MaskedInput;
