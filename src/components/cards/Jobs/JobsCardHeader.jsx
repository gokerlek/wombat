import Icon from "../../Icon.jsx";
import Priority from "./Priority.jsx";
import { Button } from "../../index.js";
import JobsInfo from "./JobsInfo.jsx";
import clsx from "clsx";
import Dropdown from "../../buttons/Dropdown.jsx";

const JobsCardHeader = ({ data }) => {
  const { title, status, isFollowed, priority } = data ?? {};

  const followedClassName = clsx({
    "fill-white stroke-gray-900 group-hover:fill-yellow-400 group-hover:stroke-yellow-400 ":
      !isFollowed,
    "fill-yellow-400 stroke-yellow-400 group-hover:fill-white group-hover:stroke-gray-900 ":
      isFollowed,
  });

  const options = [
    {
      id: 1,
      label: "published",
      action: (e) => {
        e.stopPropagation();
        console.log("published");
      },
      icon: "check",
    },
    {
      id: 2,
      label: "closed",
      action: (e) => {
        e.stopPropagation();
        console.log("closed");
      },
      icon: "cross",
    },
    {
      id: 3,
      label: "archived",
      action: (e) => {
        e.stopPropagation();
        console.log("archived");
      },
      icon: "archived",
    },
  ];

  const followed = (e) => {
    e.stopPropagation();
    console.log("followed");
  };

  const edit = (e) => {
    e.stopPropagation();
    console.log("edit");
  };
  const share = (e) => {
    e.stopPropagation();
    console.log("share");
  };

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
        <div
          className={clsx("group p-3 border rounded cursor-pointer", {
            "hover:bg-yellow-100 hover:border-yellow-200 bg-white border-gray-200":
              !isFollowed,
            "hover:bg-white hover:border-gray-200 bg-yellow-100 border-yellow-200":
              isFollowed,
          })}
        >
          <Icon
            purpose="followed"
            custom={followedClassName}
            onClick={followed}
          />
        </div>
        <Button purpose="white_border" leftIcon="edit" onClick={edit}>
          edit
        </Button>
        <Button purpose="white_border" leftIcon="share" onClick={share}>
          share
        </Button>
        <Dropdown
          options={options}
          status={{
            label: status,
          }}
        />
      </div>
    </div>
  );
};

export default JobsCardHeader;
