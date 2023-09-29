import { useParams } from "react-router-dom";
import Board from "../../components/board/index.jsx";
import clsx from "clsx";
import { useGeneral } from "../../context/GeneralProvider.jsx";
import JobsCardHeader from "../../components/cards/Jobs/JobsCardHeader.jsx";
import WhiteCard from "../../components/cards/WhiteCard.jsx";

const Details = () => {
  const { id } = useParams();
  const { open_sidebar } = useGeneral();

  return (
    <div className="flex flex-col h-full gap-7">
      <WhiteCard>
        <JobsCardHeader data={null} />
      </WhiteCard>

      <WhiteCard></WhiteCard>

      <div
        className={clsx("h-full overflow-x-auto ", {
          "w-[calc(100vw-288px)]": open_sidebar,
          "w-[calc(100vw-134px)]": !open_sidebar,
        })}
      >
        <Board />
      </div>
    </div>
  );
};

export default Details;

// const job_details_data = {
//   header: {
//     title: "",
//     priority: "",
//     working_time_model: "",
//     location: "",
//     salary: "",
//     closing_date: "",
//     recruiter: "",
//     fallowed: false,
//   },
//   top_5: [
//     {
//       id: "task-1",
//       content: {
//         name: "Onur Özdemir",
//         is_new: true,
//         avatar: "https://www.w3schools.com/howto/img_avatar.png",
//       },
//     },
//     {
//       id: "task-2",
//       content: {
//         name: "Onur Özdemir",
//         is_new: true,
//         avatar: "https://www.w3schools.com/howto/img_avatar.png",
//       },
//     },
//   ],
//
//   board: {
//     tasks: {
//       "task-1": {
//         id: "task-1",
//         content: {
//           name: "Onur Özdemir",
//           is_new: true,
//           avatar: "https://www.w3schools.com/howto/img_avatar.png",
//         },
//       },
//       "task-2": {
//         id: "task-2",
//         content: {
//           name: "Pakize Özdemir",
//           is_new: false,
//           avatar: "https://www.w3schools.com/howto/img_avatar.png",
//         },
//       },
//       "task-3": {
//         id: "task-3",
//         content: {
//           name: "Pakize Özdemir",
//           is_new: false,
//           avatar: "https://www.w3schools.com/howto/img_avatar.png",
//         },
//       },
//       "task-4": {
//         id: "task-4",
//         content: {
//           name: "Pakize Özdemir",
//           is_new: false,
//           avatar: "https://www.w3schools.com/howto/img_avatar.png",
//         },
//       },
//     },
//     columns: {
//       "column-1": {
//         id: "column-1",
//         title: "New Applied",
//         taskIds: ["task-2", "task-3", "task-4"], // order of tasks. if you want to change order, change here
//         color: "blue",
//       },
//       "column-2": {
//         id: "column-2",
//         title: "Hired",
//         taskIds: ["task-1"],// order of tasks. if you want to change order, change here
//         color: "green",
//       },
//     },
//     // Facilitate reordering of the columns. if you want to change order, change here
//     columnOrder: ["column-1", "column-2"],
//   },
// };
