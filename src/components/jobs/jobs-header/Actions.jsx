import { Button } from "../../index.js";

const Actions = () => {
  return (
    <div className="flex items-center gap-2">
      <Button purpose="cyan-border" fit leftIcon="plus">
        add new
      </Button>

      <Button purpose="white-border" fit leftIcon="filter">
        filter
      </Button>

      <Button purpose="white-border" fit leftIcon="reorder">
        reorder
      </Button>
    </div>
  );
};

export default Actions;
