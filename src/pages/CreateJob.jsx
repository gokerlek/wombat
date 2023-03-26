import { Button, Text } from "../components/index.js";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import JobPosting from "../components/create-jobs/job-posting";
import { useCallback, useState } from "react";
import CandidatesProfile from "../components/create-jobs/candidates-profile/index.jsx";
import ApplicationForm from "../components/create-jobs/application-form/index.jsx";

const tabs = {
  0: "Job Posting",
  1: "Candidates Profile",
  2: "Application Form",
  3: "Settings",
};
const CreateJob = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const nextTab = useCallback(() => {
    selectedIndex < Object.keys(tabs).length - 1 &&
      setSelectedIndex(selectedIndex + 1);
  }, [selectedIndex]);

  return (
    <>
      <div className="flex flex-row w-screen h-[calc(100vh-160px)] px-7 ">
        <div className="w-full  bg-gray-50 rounded-2xl p-7 ">
          <div className=" max-w-[1328px] w-full h-full mx-auto overflow-hidden">
            <Tab.Group
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
            >
              <Tab.List className={clsx("flex h-[46px]   w-full mb-7")}>
                {Object.values(tabs).map((category, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      clsx(
                        "w-full text-sm font-normal capitalize border-b-2",
                        " ring-offset-none focus:outline-none",
                        {
                          "text-cyan-500  border-cyan-500 font-semibold":
                            selected,
                          "text-gray-900 border-gray-200": !selected,
                        }
                      )
                    }
                  >
                    <Text>{category}</Text>
                  </Tab>
                ))}
              </Tab.List>
              <div className="h-[calc(100vh-190px)] overflow-y-auto no-scrollbar pb-60">
                <Tab.Panels>
                  <JobPosting />
                  <CandidatesProfile />
                  <ApplicationForm />
                  <Tab.Panel>Content 4</Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end max-w-[1328px] w-full mx-auto h-20">
        {!!tabs[selectedIndex + 1] && (
          <Button
            height={52}
            fit
            purpose="cyan"
            rightIcon="arrow-right"
            onClick={nextTab}
          >
            {tabs[selectedIndex + 1]}
          </Button>
        )}
      </div>
    </>
  );
};

export default CreateJob;
