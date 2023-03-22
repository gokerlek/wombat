import Text from "../Text.jsx";
import { Button } from "../index.js";
import clsx from "clsx";
import { useGeneral } from "../../context/GeneralProvider.jsx";
const ListActions = ({ count }) => {
  const { open_sidebar } = useGeneral();
  return (
    <div
      className={clsx("flex justify-between items-center px-5 my-3.5 ", {
        "w-[calc(100vw-288px)]": open_sidebar,
        "w-[calc(100vw-134px)]": !open_sidebar,
      })}
    >
      <Text
        markdown
        className="text-gray-900 text-sm capitalize"
        searchTerms={["count"]}
        changeTerms={[count ?? "N/A"]}
      >
        showing jobs
      </Text>

      <div className="flex items-center gap-2">
        <Button purpose="gray" fit leftIcon="filter">
          filter
        </Button>

        <Button purpose="gray" fit leftIcon="reorder">
          reorder
        </Button>
      </div>
    </div>
  );
};

export default ListActions;
