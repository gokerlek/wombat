import * as React from "react";
import SearchBar from "../search/index.jsx";
import { Button } from "../index.js";
import Icon from "../Icon.jsx";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths.js";

const DefaultItems = () => {
  const navigate = useNavigate();
  const goToCreateJob = () => {
    navigate(paths.create_job);
  };
  return (
    <>
      <SearchBar />
      <Button
        purpose="cyan"
        fit
        rightIcon="plus"
        height={48}
        onClick={goToCreateJob}
      >
        create new job
      </Button>
      <Icon
        className="w-6 min-w-[24px]"
        purpose="calendar"
        onClick={() => {}}
      />
      <Icon purpose="bell" onClick={() => {}} />
      <div className="min-w-[38px] h-[38px] rounded-full bg-cyan-500"></div>
    </>
  );
};

export default DefaultItems;
