import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import clsx from "clsx";
import useBoardColor from "../../hooks/useBoardColor.jsx";

const InnerList = ({ tasks, deleteTask }) => {
  return tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} deleteTask={deleteTask} />
  ));
};

const Column = ({ column, tasks, index, deleteTask }) => {
  const { id, color, title } = column;

  const { bg_color, badge_color, text_color, border_color } = useBoardColor(
    color ?? "gray"
  );

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={clsx("  h-full w-325 rounded-t-lg mr-7", bg_color)}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div
            className={clsx(
              "flex gap-2 items-center px-4 py-3 border-b-2 mb-7",
              border_color,
              text_color
            )}
            {...provided.dragHandleProps}
          >
            <div className={clsx("px-2 w-fit rounded-full", badge_color)}>
              {title}
            </div>
            {tasks.length > 0 ? tasks.length : ""}
          </div>
          <Droppable droppableId={id} type="task">
            {(provided, snapshot) => (
              <div
                className={clsx("w-full rounded-lg px-1.5", bg_color, {
                  "bg-gray-100 rounded-lg": snapshot.isDraggingOver,
                })}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <InnerList tasks={tasks} deleteTask={deleteTask} />
                <div className="h-20 w-full">{provided.placeholder}</div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
