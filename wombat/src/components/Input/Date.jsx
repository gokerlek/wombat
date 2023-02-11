import DatePicker from "react-datepicker";
import { DateTime } from "luxon";
import { useState } from "react";
import "./date.css";
import clsx from "clsx";
import { Icon, Text } from "../index.js";
import { useTranslation } from "react-i18next";
import useInputValue from "../../hooks/useInputValue.js";

const Dates = ({
  purpose,
  selectedDate,
  onChange,
  startTime,
  darkLabel,
  error,
}) => {
  const { t } = useTranslation();

  const { label, placeholder, type } = useInputValue(purpose, t);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="flex flex-col w-full">
      {label && (
        <Text
          className={clsx("text-sm font-medium  mb-1", {
            "text-tGray-700": darkLabel,
            "text-tGray-600": !darkLabel,
          })}
        >
          {label}
        </Text>
      )}
      <div className="relative">
        {type === "range" && (
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            className="text-tGray-700 rounded-md border border-border"
            placeholderText={placeholder}
            dateFormat="dd MMM yyyy"
            onChange={(update) => {
              setDateRange(update);
            }}
          />
        )}

        {type === "date" && (
          <DatePicker
            className={clsx(
              " appearance-none bg-t100  border  rounded-md pl-2  pr-5 shadow-sm ",
              " placeholder:text-t700 animate-shadow ",
              "focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
              {
                "border-t500": !error,
                "border-error": error,

                "w-full block": !purpose.includes("code"),
              }
            )}
            selected={selectedDate}
            onChange={onChange}
            dateFormat="dd MMM yyyy"
            placeholderText={placeholder}
          />
        )}

        {type === "time" && (
          <DatePicker
            className={clsx(
              " appearance-none bg-t100  border  rounded-md pl-2  pr-5 shadow-sm ",
              " placeholder:text-t700 animate-shadow ",
              "focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
              {
                "border-t500": !error,
                "border-error": error,

                "w-full block": !purpose.includes("code"),
              }
            )}
            selected={selectedDate}
            onChange={onChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="HH:mm"
            timeFormat="HH:mm"
            timeCaption=""
            placeholderText={placeholder}
          />
        )}

        <Icon purpose="selector" className="absolute right-2 top-2" />
      </div>
    </div>
  );
};

export default Dates;
