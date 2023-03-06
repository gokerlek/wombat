import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Text } from "../../index.js";
import JobsCard from "../../cards/Jobs/index.jsx";
import { addRandomJobs } from "../../../dummyData.jsx";
import ListActions from "../ListActions.jsx";

import ReactGridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import useWindowSize from "../../../hooks/useWindowsSize.jsx";
import { useState } from "react";

const Tabs = () => {
  const { width } = useWindowSize();
  const minWidth = width < 1000 ? 1000 : width - 280;
  const tabs = ["all", "followed", "closed", "archived"];
  const [is_draggable, setDraggable] = useState(false);

  let jobs = [];

  addRandomJobs(10, jobs);

  const fallowedJobs = jobs.filter((job) => job.isFollowed);

  const closedJobs = jobs.filter((job) => job.status === "closed");

  const archivedJobs = jobs.filter((job) => job.status === "archived");

  return (
    <Tab.Group>
      <Tab.List className="flex bg-white px-7  h-[46px] rounded-b-lg  w-[calc(100vw-288px)] ">
        {tabs.map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              clsx(
                "w-full text-sm font-normal capitalize border-b-2",
                " ring-offset-none focus:outline-none",
                {
                  "text-cyan-500  border-cyan-500 font-semibold": selected,
                  "text-gray-900 border-gray-200": !selected,
                }
              )
            }
          >
            <Text>{category}</Text>
          </Tab>
        ))}
      </Tab.List>

      <ListActions />

      <div className=" h-[calc(100vh-330px)] no-scrollbar   rounded-lg overflow-scroll w-[calc(100vw-288px)] overflow-hidden">
        <div className="min-w-[800px] mb-7">
          <Tab.Panels>
            <Tab.Panel className="flex flex-col gap-3.5">
              <ReactGridLayout
                layouts={jobs.map((job, index) => {
                  return {
                    key: job.id,
                    i: job.id,
                    x: 0,
                    y: index,
                    w: 1,
                    h: 1,
                    minW: 1,
                    minH: 1,
                  };
                })}
                onLayoutChange={(layout, layouts) => {
                  console.log("onLayoutChange", layout, layouts);
                }}
                className="layout"
                width={minWidth}
                rowHeight={168}
                cols={1}
                autoSize={true}
                isResizable={false}
                isDraggable={is_draggable}
              >
                {jobs.map((job) => (
                  <div className="  " key={job.id}>
                    <JobsCard
                      key={job.id}
                      jobs={job}
                      setDraggable={setDraggable}
                    />
                  </div>
                ))}
              </ReactGridLayout>
            </Tab.Panel>
            <Tab.Panel className="flex flex-col gap-3.5">
              {fallowedJobs.map((job) => (
                <JobsCard key={job.id} jobs={job} />
              ))}
            </Tab.Panel>
            <Tab.Panel className="flex flex-col gap-3.5">
              {closedJobs.map((job) => (
                <JobsCard key={job.id} jobs={job} />
              ))}
            </Tab.Panel>
            <Tab.Panel className="flex flex-col gap-3.5">
              {archivedJobs.map((job) => (
                <JobsCard key={job.id} jobs={job} />
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </div>
    </Tab.Group>
  );
};

export default Tabs;
