import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Text } from "../../index.js";
import JobsCard from "../../cards/Jobs/index.jsx";
import { job_list } from "../../../dummyData.jsx";
import ListActions from "../ListActions.jsx";

import { memo, useState } from "react";
import { useGeneral } from "../../../context/GeneralProvider.jsx";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Tabs = () => {
  const { open_sidebar } = useGeneral();
  const tabs = ["all", "followed", "closed", "archived"];
  const [jobs, setJobs] = useState(job_list);

  const fallowedJobs = job_list.filter((job) => job.isFollowed);

  const closedJobs = job_list.filter((job) => job.status === "closed");

  const archivedJobs = job_list.filter((job) => job.status === "archived");

  const InnerList = memo(({ job, index }) => {
    return (
      <Draggable key={job.id + ""} draggableId={job.id + ""} index={index}>
        {(provided) => (
          <div
            className="mb-3.5"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <JobsCard key={job.id} jobs={job} />
          </div>
        )}
      </Draggable>
    );
  });

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(jobs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setJobs(items);
  };
  return (
    <Tab.Group>
      <Tab.List
        className={clsx("flex bg-white px-7  h-[46px] rounded-b-lg   w-full")}
      >
        {tabs.map((category, index) => (
          <Tab
            key={index}
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

      <div
        className={clsx(
          " h-[calc(100vh-330px)] no-scrollbar  rounded-lg overflow-scroll overflow-hidden ",
          {
            "w-[calc(100vw-288px)]": open_sidebar,
            "w-[calc(100vw-134px)]": !open_sidebar,
          }
        )}
      >
        <div className="min-w-[800px] mb-7">
          <Tab.Panels>
            <Tab.Panel className="flex flex-col gap-3.5">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="job-list">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {jobs.map((job, index) => {
                        return (
                          <InnerList
                            key={job.id + ""}
                            job={job}
                            index={index}
                          />
                        );
                      })}

                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
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
