const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: {
        name: "Onur Özdemir",
        is_new: true,
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    "task-2": {
      id: "task-2",
      content: {
        name: "Pakize Özdemir",
        is_new: false,
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    "task-3": {
      id: "task-3",
      content: {
        name: "Pakize Özdemir",
        is_new: false,
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    "task-4": {
      id: "task-4",
      content: {
        name: "Pakize Özdemir",
        is_new: false,
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "New Applied",
      taskIds: ["task-2", "task-3", "task-4"],
      color: "blue",
    },
    "column-2": {
      id: "column-2",
      title: "Hired",
      taskIds: ["task-1"],
      color: "green",
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2"],
};

export default initialData;
