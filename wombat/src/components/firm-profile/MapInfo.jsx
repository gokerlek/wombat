import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { Icon, Input, Select, Text } from "../index.js";
import { cities, districts } from "../../data/city.js";
import { useForm } from "react-hook-form";

const MapInfo = () => {
  const { control, register } = useForm();

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const findLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    console.log(position);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e);
    setSelectedDistrict(null);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <SectionHeader>Map Information</SectionHeader>
      <div className="flex flex-row justify-between w-5/6 h-fit">
        <div className="flex flex-col gap-2 w-1/2 h-fit">
          <div className="flex flex-row items-center gap-5 ">
            <Icon purpose="city" />
            <Text className="text-sm">City</Text>
          </div>

          <Select
            options={cities}
            onChange={handleCityChange}
            value={selectedCity}
          />

          <div className="flex flex-row items-center gap-5 ">
            <Icon purpose="districts" />
            <Text className="text-sm">District</Text>
          </div>

          <Select
            options={districts[selectedCity]?.map((district) => ({
              id: district,
              value: district,
            }))}
            onChange={handleDistrictChange}
            value={selectedDistrict}
          />
          <div className="flex flex-row items-center gap-5 ">
            <Icon purpose="street" />
            <Text className="text-sm">Street Information</Text>
          </div>

          <Input purpose="street" control={control} register={register} />

          <Input purpose="buildingNo" control={control} register={register} />
        </div>
      </div>
    </div>
  );
};

export default MapInfo;
