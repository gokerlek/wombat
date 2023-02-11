import { useState } from "react";
import { Loading, Text } from "../components/index.js";
import InfoArea from "../components/pageInfo/InfoArea.jsx";
import { IngredientOptionsData } from "../components/dummyData.js";
import { constants } from "../constants.js";
import Sections from "../components/lists/Sections.jsx";

const ProductManagement = ({ loading, error }) => {
  if (loading) return <Loading />;

  if (error) return <p>Error: {error.message}</p>;

  const [data, setData] = useState(IngredientOptionsData);

  const update = (newData) => {
    setData(newData);
  };

  return (
    <div className="absolute inset-0 pb-10 overflow-y-auto">
      <InfoArea
        purpose={constants.productManagement}
        title="Product Management"
        name={constants.productManagement}
        data={data}
        update={update}
      />

      <div className="flex flex-col gap-5  w-full h-fit px-10 py-12">
        {data?.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-2  w-full h-fit">
              <Text className="border border-pOrange-400 text-pRed-450 font-extrabold text-lg rounded text-start px-4 py-5">
                {item.name}
              </Text>

              <Sections
                section={index}
                setData={setData}
                data={data}
                name={constants.productManagement}
                options={item.options}
                update={update}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductManagement;
