import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import useBoardActions from "./useBoardActions.jsx";
import initial_data from "./data";

const Board = () => {
  const { state, onDragEnd, deleteTask } = useBoardActions(
    "board",
    initial_data
  );
  const InnerList = ({
    column,
    taskMap,
    index,
    length,
    addNewTask,
    deleteTask,
    deleteColumn,
  }) => {
    const tasks = column?.taskIds?.map((taskId) => taskMap[taskId]);
    return (
      <Column
        column={column}
        tasks={tasks}
        index={index}
        length={length}
        addNewTask={addNewTask}
        deleteTask={deleteTask}
        deleteColumn={deleteColumn}
      />
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="flex bg-white px-5 pt-5 h-full w-fit rounded-t-lg "
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {state?.columnOrder?.map((columnId, index) => {
              const column = state?.columns[columnId];
              return (
                <InnerList
                  key={column?.id}
                  column={column}
                  taskMap={state?.tasks}
                  index={index}
                  length={state?.columnOrder?.length}
                  deleteTask={deleteTask}
                />
              );
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
