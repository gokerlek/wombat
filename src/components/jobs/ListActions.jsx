import Text from "../Text.jsx";
import { Button } from "../index.js";
const ListActions = ({ count }) => {
  return (
    <div className="flex justify-between items-center px-5 my-3.5">
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
