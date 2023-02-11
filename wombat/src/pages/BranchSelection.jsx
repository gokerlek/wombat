import { useNavigate } from "react-router-dom";
import Text from "../components/Text.jsx";

const BranchSelection = () => {
  const branchList = [
    {
      id: 1,
      name: "Kadıköy",
      address: "Kadıköy, İstanbul",
      image:
        "https://images.unsplash.com/photo-1667407226498-c06b03df35a8?ixlib=rb-",
    },
    {
      id: 2,
      name: "Kadıköy",
      address: "Kadıköy, İstanbul",
      image:
        "https://images.unsplash.com/photo-1667610516842-1411d15b4289?ixlib=rb-",
    },
  ];

  const navigate = useNavigate();

  const handleBranchSelection = (branchId) => () => {
    navigate(`/orders/${branchId}`);
    localStorage.setItem("branchId", branchId);
  };

  return (
    <div className="w-full max-w-[1600px] h-fit bg-pGray-100 mx-auto divide-y">
      <Text className="text-lg py-2.5 text-center font-medium ">
        RESTAURANTS YOU ARE AUTHORIZED
      </Text>
      <div className="flex flex-wrap gap-5 p-10 items-center justify-center">
        {branchList.map((branch, index) => (
          <div
            key={index}
            className="flex flex-col border border-pGray-300 rounded px-3 py-2.5 w-64 h-fit hover:bg-white"
            onClick={handleBranchSelection(branch.id)}
          >
            {branch.image && (
              <img
                className="max-h-20 object-contain"
                src={branch.image}
                alt={branch.name}
              />
            )}
            <div className="text-xs text-gray-600 h-fit w-full text-center py-4 border-pGray-300 border-b">
              {branch.name ?? ""}
            </div>
            <div className="text-[10px] text-gray-600 h-fit w-full text-center pt-1.5">
              {branch.address ?? ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchSelection;
