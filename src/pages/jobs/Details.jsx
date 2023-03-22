import { useParams } from "react-router-dom";
import Board from "../../components/board/index.jsx";
import clsx from "clsx";
import { useGeneral } from "../../context/GeneralProvider.jsx";

const Details = () => {
  const { id } = useParams();
  const { open_sidebar } = useGeneral();

  return (
    <div
      className={clsx("h-full overflow-x-auto ", {
        "w-[calc(100vw-288px)]": open_sidebar,
        "w-[calc(100vw-134px)]": !open_sidebar,
      })}
    >
      <Board />
    </div>
  );
};

export default Details;
