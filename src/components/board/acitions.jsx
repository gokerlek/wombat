// const addNewColumn = () => {
//   const newColumn = {
//     id: `column-${state.columnOrder.length + 1}`,
//     title: `Column ${state.columnOrder.length + 1}`,
//     taskIds: [],
//   };
//   const newState = {
//     ...state,
//     columns: {
//       ...state.columns,
//       [newColumn.id]: newColumn,
//     },
//     columnOrder: [...state.columnOrder, newColumn.id],
//   };
//   update(newState);
// };

// const deleteColumn = (columnId) => () => {
//   // remove the column from the columnOrder array
//   const newColumnOrder = state.columnOrder.filter((id) => id !== columnId);
//   // remove the column from the columns object
//   const newColumns = { ...state.columns };
//   delete newColumns[columnId];
//   // remove the tasks that belong to the column
//   const newTasks = { ...state.tasks };
//   const taskIdsToRemove = Object.values(newTasks)
//     .filter((task) => task.column === columnId)
//     .map((task) => task.id);
//   taskIdsToRemove.forEach((taskId) => delete newTasks[taskId]);
//   // update the state
//   const newState = {
//     ...state,
//     columnOrder: newColumnOrder,
//     columns: newColumns,
//     tasks: newTasks,
//   };
//   update(newState);
// };

//
// const addNewTask = (column_id) => () => {
//     const newTask_id = Math.random().toString(36).substr(2, 9);
//     const newTask = {
//         id: newTask_id,
//         content: {
//             name: "Yeni Biri",
//             is_new: false,
//             avatar: "https://www.w3schools.com/howto/img_avatar.png",
//         },
//     };
//
//     const newColumn = {
//         ...state.columns[column_id],
//         taskIds: [...state.columns[column_id].taskIds, newTask_id],
//     };
//
//     const newState = {
//         ...state,
//         tasks: {
//             ...state.tasks,
//             [newTask_id]: newTask,
//         },
//         columns: {
//             ...state.columns,
//             [column_id]: newColumn,
//         },
//     };
//
//     update(newState);
// };
