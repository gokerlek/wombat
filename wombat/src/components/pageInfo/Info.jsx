import Text from "../Text.jsx";
import Icon from "../Icon.jsx";

const Info = () => {
  return (
    <div className="flex flex-col items-start mt-2 gap-4 bg-pYellow-100 border-gray-400 border rounded p-5 w-11/12 max-w-[520px]">
      <div className="flex gap-1">
        <Icon purpose="info" />
        <Text className="text-xs text-pGray-900">
          The updates are published after being approved by the Packus.com
          editors. You can follow the results of the updates in the
          notifications section.
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon purpose="info" />
        <Text className="text-xs text-pGray-900" markdown>
          Comments are published after they are approved by the editors of
          Paketus.com. Only approved comments are forwarded to the restaurant
          for reply.
        </Text>
      </div>

      <div className="flex gap-1 items-center">
        <Icon purpose="info" />
        <Text className="text-xs text-pGray-900" markdown>
          You can use the notifications section for your questions and
          suggestions about the comment point system.
        </Text>
      </div>
    </div>
  );
};

export default Info;
