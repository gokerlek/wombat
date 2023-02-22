import { useTranslation } from "react-i18next";
import { Text, Icon } from "../index.js";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  leftIcon,
  rightIcon,
  purpose = "orange",
  className,
  fit,
  height,
  disabled,
}) => {
  const { t } = useTranslation();
  const leftIconElement = {
    purpose: typeof leftIcon === "object" ? leftIcon.purpose : leftIcon,
    width: leftIcon?.width ?? null,
    height: leftIcon?.height ?? null,
    color: leftIcon?.color ?? null,
    className: leftIcon?.className ?? null,
  };

  const rightIconElement = {
    purpose: typeof rightIcon === "object" ? rightIcon.purpose : rightIcon,
    width: rightIcon?.width,
    height: rightIcon?.height,
    color: rightIcon?.color,
  };

  const disabledClassName = {
    " cursor-not-allowed": disabled,
    "cursor-pointer": !disabled,
  };

  const widthClassName = {
    "w-full": !fit,
    "w-fit": fit,
  };

  const baseContainerClassName = clsx(
    "flex items-center justify-center  rounded-md px-4  gap-2 capitalize min-w-fit",
    disabledClassName,
    widthClassName
  );

  const containerClassName = {
    cyan: clsx(
      baseContainerClassName,
      "font-normal  text-center text-sm",
      "text-white",
      "bg-cyan-500 hover:bg-cyan-600"
    ),
    cyan_border: clsx(
      baseContainerClassName,
      "font-medium  text-center text-sm",
      "text-white",
      "bg-cyan-500 hover:bg-cyan-600",
      "border border-cyan-600"
    ),
    white_border: clsx(
      baseContainerClassName,
      "font-medium  text-center text-sm",
      "text-gray-900",
      "bg-white hover:bg-gray-50",
      "border border-gray-200"
    ),
    gray: clsx(
      baseContainerClassName,
      "font-medium  text-center text-sm",
      "text-gray-900",
      "bg-gray-100 hover:bg-gray-200"
    ),
  };

  return (
    <div
      style={{ height: height ?? 40 }}
      className={className ?? containerClassName[purpose]}
      onClick={disabled ? null : onClick}
    >
      {leftIconElement.purpose && <Icon {...leftIconElement} />}

      <Text>{t(children)}</Text>

      {rightIconElement.purpose && <Icon {...rightIconElement} />}
    </div>
  );
};

export default Button;
