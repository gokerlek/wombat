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
    " cursor-not-allowed hover:scale-100": disabled,
  };

  const containerClassName = {
    cyan: clsx(
      "flex items-center justify-center bg-cyan-500 rounded-md px-4  gap-2 capitalize",
      " text-white font-normal cursor-pointer text-center text-sm",
      " hover:bg-cyan-600",
      disabledClassName,
      {
        "w-full": !fit,
        "w-fit": fit,
      }
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
