import { useState } from "react";

const useBoardActions = (name, initialData) => {
  const localState = JSON.parse(localStorage.getItem("state"));
  const [state, setState] = useState(localState ? localState : initialData);

  const update = (new_state) => {
    setState(new_state);
    localStorage.setItem(name, JSON.stringify(new_state));
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder,
      };
      update(newState);
      return;
    }

    const home = state.columns[source.droppableId];
    const foreign = state.columns[destination.droppableId];

    if (home === foreign) {
      const newTask_ids = Array.from(home.taskIds);
      newTask_ids.splice(source.index, 1);
      newTask_ids.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        taskIds: newTask_ids,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newHome.id]: newHome,
        },
      };

      update(newState);
      return;
    }

    // moving from one list to another
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    update(newState);
  };

  const deleteTask = (taskId) => () => {
    // find the column that contains the task
    const column = Object.values(state.columns).find((col) =>
      col.taskIds.includes(taskId)
    );
    // remove the task from the column's taskIds array
    const newTaskIds = column.taskIds.filter((id) => id !== taskId);
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };
    // remove the task from the tasks object
    const newTasks = { ...state.tasks };
    delete newTasks[taskId];
    // update the state
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
      tasks: newTasks,
    };
    update(newState);
  };

  return { state, onDragEnd, deleteTask };
};

export default useBoardActions;
