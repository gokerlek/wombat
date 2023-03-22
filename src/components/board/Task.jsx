import React from "react";
import { Draggable } from "react-beautiful-dnd";
import clsx from "clsx";
import { Button, Icon, Text } from "../index.js";

const Task = ({ task, index, deleteTask }) => {
  const { id, content } = task ?? {};
  const { name, is_new, avatar } = content ?? {};
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={clsx(
            "flex flex-col rounded-md w-full divide-y divide-gray-200 mb-3.5 shadow-sm",
            {
              "bg-gray-100": snapshot.isDragging,
              "bg-white": !snapshot.isDragging,
            }
          )}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="flex justify-between px-4 py-3">
            <div className="flex gap-1 items-center text-sm font-semibold text-gray-800 ">
              {name}
              {is_new && (
                <div className="flex gap-1 items-center bg-green-200 text-green-600 rounded-full  px-1.5 text-[10px] font-medium ml-2">
                  <Icon purpose="dot" />
                  <Text>New</Text>
                </div>
              )}
            </div>
            <img
              className="inline-block h-7 w-7 rounded-full"
              src={avatar}
              alt="avatar"
            />
          </div>

          <div className="flex divide-x">
            <div className="flex-1">
              <Button purpose="text" leftIcon="play">
                start interview
              </Button>
            </div>
            <div className="flex-1">
              <Button
                purpose="text"
                leftIcon="disqualify"
                onClick={deleteTask(id)}
              >
                disqualify
              </Button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
