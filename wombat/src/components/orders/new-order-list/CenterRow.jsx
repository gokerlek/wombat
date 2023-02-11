import clsx from "clsx";
import { Button, Text } from "../../index.js";

const CenterRow = ({ status, time, id }) => {
  const elapsedTime = 15;

  const handleActionByStatus = () => {
    switch (status) {
      case 0:
        return () => console.log("Cancel", id);
      case 1:
        return () => console.log("Send", id);
      case 2:
        return () => console.log("Deliver", id);
    }
  };

  return (
    <div
      className={clsx(
        "flex flex-row justify-between items-center p-4 border-y",
        {
          "border-pRed-600": status === 0,
          "border-pYellow-600": status === 1,
          "border-pGreen-600": status === 2,
        }
      )}
    >
      <div className="flex flex-col items-center gap-1">
        <Text className="text-xs">Order Time:</Text>

        <div className="font-bold text-sm">{time}</div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Text className="text-xs">Elapsed Time:</Text>

        <div
          className={clsx("text-[20px] px-7 py-3 rounded-full  text-white", {
            "bg-pOrange-100": status === 0,
            "bg-pOrange-200": status === 1,
            "bg-pOrange-300": status === 2,
          })}
        >
          {elapsedTime + " dk."}
        </div>
      </div>

      <Button
        onClick={handleActionByStatus()}
        className={clsx("text-sm font-medium border rounded-full py-1.5 px-4", {
          "border-pRed-600 hover:bg-pRed-600 text-pRed-600 hover:text-white ":
            status === 0,
          "border-pYellow-600 hover:bg-pYellow-500 hover:border-pYellow-700 text-pYellow-700 hover:text-pYellow-800 ":
            status === 1,
          "border-pGreen-600 hover:bg-pGreen-400 hover:border-pGreen-500 text-pGreen-550 hover:text-white ":
            status === 2,
        })}
      >
        {clsx({
          Cancel: status === 0,
          "Send The Package": status === 1,
          Completed: status === 2,
        })}
      </Button>
    </div>
  );
};

export default CenterRow;
