import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Text } from "../../index.js";
import JobsCard from "../../cards/Jobs/index.jsx";
import { addRandomJobs } from "../../../dummyData.jsx";
import ListActions from "../ListActions.jsx";

const Tabs = () => {
  const tabs = ["all", "followed", "closed", "archived"];

  let jobs = [];

  addRandomJobs(10, jobs);

  const fallowedJobs = jobs.filter((job) => job.isFollowed);

  const closedJobs = jobs.filter((job) => job.status === "closed");

  const archivedJobs = jobs.filter((job) => job.status === "archived");

  return (
    <Tab.Group>
      <Tab.List className="flex bg-white px-7  h-[46px] rounded-b-lg">
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

      <div className=" h-[calc(100vh-330px)] no-scrollbar  overflow-y-auto  rounded-lg">
        <Tab.Panels>
          <Tab.Panel className="flex flex-col gap-3.5">
            {jobs.map((job) => (
              <JobsCard key={job.id} jobs={job} />
            ))}
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
    </Tab.Group>
  );
};

export default Tabs;
