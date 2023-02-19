import Icon from "../../Icon.jsx";
import Priority from "./Priority.jsx";
import { Button } from "../../index.js";
import JobsInfo from "./JobsInfo.jsx";
import clsx from "clsx";

const JobsCardHeader = ({ data }) => {
  const { title, status, isFollowed, priority } = data ?? {};
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col items-start gap-1.5  ">
        <div className="flex gap-3">
          <div className="text-2xl font-semibold text-gray-900">
            {title ?? "N/A"}
          </div>
          <Priority priority={priority ?? "N/A"} />
        </div>

        <JobsInfo data={data} />
      </div>

      <div className="flex  items-center gap-2">
        <div className={clsx("p-3 cursor-pointer")}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={clsx({
              "fill-white stroke-gray-900 hover:fill-yellow-400 hover:stroke-yellow-400 ":
                isFollowed,
              "fill-yellow-400 stroke-yellow-400 hover:fill-white hover:stroke-gray-900 ":
                !isFollowed,
            })}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2628 1.93807C10.9048 2.01258 11.375 2.56608 11.375 3.21241V12.25L7 10.0625L2.625 12.25V3.21241C2.625 2.56608 3.09521 2.01258 3.73723 1.93807C4.80758 1.81385 5.89633 1.75 7 1.75C8.10367 1.75 9.19242 1.81386 10.2628 1.93807Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Button purpose="white_border" leftIcon="edit">
          edit
        </Button>
        <Button purpose="white_border" leftIcon="share">
          share
        </Button>
        <div>{status}</div>
      </div>
    </div>
  );
};

export default JobsCardHeader;
