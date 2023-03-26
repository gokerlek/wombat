import { Button, Icon } from "../index.js";
import PublishDropDown from "../buttons/PublishDropDown.jsx";

const CreateItems = () => {
  const options = [
    {
      id: 1,
      label: "Publish My Career Page",
      action: (e) => {
        e.stopPropagation();
        console.log("Publish My Career Page");
      },
      icon: "world",
    },
    {
      id: 2,
      label: "Use Internally",
      action: (e) => {
        e.stopPropagation();
        console.log("Use Internally");
      },
      icon: "building",
    },
  ];
  return (
    <>
      <Icon
        className="text-gray-800 hover:bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center h-12 w-12 "
        purpose="eye"
      />
      <Button fit purpose="white_border" height={48}>
        save as draft
      </Button>
      <PublishDropDown options={options} />
    </>
  );
};

export default CreateItems;
