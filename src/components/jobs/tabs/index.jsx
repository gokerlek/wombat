import { useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Text } from "../../index.js";
import JobsCard from "../../cards/Jobs/index.jsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = () => {
  let [categories] = useState({
    all: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    followed: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    closed: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  const tabs = ["all", "followed", "closed", "archived"];

  let jobs = [];

  function addRandomJobs(numJobs) {
    for (let i = 0; i < numJobs; i++) {
      const newJob = {
        id: Math.floor(Math.random() * 1000) + 1,
        title: "New Job",
        priority: ["high", "medium", "low"][Math.floor(Math.random() * 3)],
        isFallowed: Math.random() < 0.5,
        status: ["published", "archived", "closed"][
          Math.floor(Math.random() * 3)
        ],
        working_time_model: ["full-time", "part-time"][
          Math.floor(Math.random() * 2)
        ],
        location: ["remote", "hybrid", "office"][Math.floor(Math.random() * 3)],
        salary: Math.floor(Math.random() * 5000) + 1000 + "$",
        closing_date: "2022-12-31",
        recruiter: "Jane Doe",
        candidate_details: {
          total: Math.floor(Math.random() * 20) + 1,
          new: Math.floor(Math.random() * 5) + 1,
          other: [
            {
              title: "New",
              count: Math.floor(Math.random() * 5) + 1,
            },
            {
              title: "Interview",
              count: Math.floor(Math.random() * 3),
            },
            {
              title: "Offer",
              count: Math.floor(Math.random() * 2),
            },
          ],
          hired: Math.floor(Math.random() * 3),
        },
      };

      jobs.push(newJob);
    }
  }

  addRandomJobs(10);

  const fallowedJobs = jobs.filter((job) => job.isFallowed);

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
                "w-full text-sm font-normal capitalize",
                " ring-offset-none focus:outline-none",
                {
                  "text-cyan-500 border-b-2 border-cyan-500": selected,
                  "text-gray-900": !selected,
                }
              )
            }
          >
            <Text>{category}</Text>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-7">
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
    </Tab.Group>
  );
};

export default Tabs;
