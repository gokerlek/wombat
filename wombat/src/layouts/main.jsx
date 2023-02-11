import { Outlet, useLocation, useNavigate } from "react-router-dom";
import * as React from "react";
import { Button, Text, Toggle } from "../components/index.js";
import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { useForm } from "react-hook-form";
import NavLinks from "../components/NavLinks.jsx";
import clsx from "clsx";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit } = useForm();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRestaurant, setIsOpenRestaurant] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [isOpenCodeArea, setIsOpenCodeArea] = useState(false);

  const branchId = localStorage.getItem("branchId");

  const openMenu = (data) => {
    setIsOpen(true);
    console.log(data);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleRestaurant = () => {
    setIsOpenRestaurant(!isOpenRestaurant);
  };

  const handleCodeArea = () => {
    setIsOpenCodeArea(!isOpenCodeArea);
  };

  const handleNotification = () => {
    setIsOpenNotification(!isOpenNotification);
  };

  const goBranchSelectionPage = () => {
    navigate("/branch-selection");
  };

  const navigateOrdersPage = () => {
    navigate(`/orders/${branchId}`);
  };

  const notificationButtonCondition = !!isOpen;

  const codeAreaButtonCondition = !!isOpenCodeArea && !!!isOpen;

  const branchSelectionPageCondition =
    location.pathname === "/branch-selection";

  const toggleButtonCondition = !branchSelectionPageCondition;

  const branchSelectionButtonCondition = !branchSelectionPageCondition;

  const branchName = !branchSelectionPageCondition;

  const settingsButtonCondition = !branchSelectionPageCondition && !isOpen;

  const onlineButtonCondition = !branchSelectionPageCondition;

  return (
    <div className="w-screen h-screen flex flex-row">
      {isOpen && (
        <div className="min-w-[150px] max-w-[250px] w-[10%] border-r-4 border-gray-900 h-full bg-pGray-900">
          <div className="flex justify-start items-center w-full h-20 gap-2 mx-5 ">
            <Icon purpose="logo" className="w-7 h-7" />
            <Text className="text-white font-bold text-sm mt-2">mutfak</Text>
          </div>

          <NavLinks />

          <div className="mt-8" />
          <Button purpose="red" rightIcon="quit" onClick={closeMenu}>
            Close Settings
          </Button>
        </div>
      )}

      <div
        className={clsx("h-full", {
          "w-full": !isOpen,
          "flex-1": isOpen,
        })}
      >
        <div className="flex justify-between items-center w-full h-20 bg-pGray-900 px-5">
          <div className="flex justify-start items-center w-full h-20 gap-5">
            {!isOpen && (
              <Icon purpose="logo" className="w-7 h-7 min-w-[28px]" />
            )}

            {toggleButtonCondition && (
              <div className="flex gap-2 items-center justify-start border border-pGray-300 rounded  p-1 min-w-[100px]">
                <Toggle
                  onClick={handleRestaurant}
                  closeColor="bg-red-600"
                  openColor="bg-green-600"
                  size="small"
                />

                {isOpenRestaurant && (
                  <Text className="text-green-600 font-bold text-sm">Open</Text>
                )}

                {!isOpenRestaurant && (
                  <Text className="text-red-600 font-bold text-sm ">
                    Closed
                  </Text>
                )}
              </div>
            )}

            {branchSelectionButtonCondition && (
              <Button
                purpose="white-border"
                leftIcon="left"
                onClick={goBranchSelectionPage}
              >
                Branch Selection
              </Button>
            )}

            {branchName && <div className="text-white">Branch Name</div>}
          </div>

          <div className="flex justify-end items-center gap-2 min-w-fit">
            {codeAreaButtonCondition && (
              <div className="flex w-fit h-fit items-center">
                <Text className="w-16 flex text-sm text-white mr-2">
                  PIN Code
                </Text>

                <input
                  className="h-8 appearance-none w-14 border-0 rounded-l bg-white placeholder:text-gray-400 text-sm"
                  type="password"
                  maxLength={4}
                  placeholder={"1234"}
                  {...register("pinCode", {
                    required: true,
                    minLength: 4,
                    maxLength: 4,
                    pattern: /^[0-9]+$/,
                  })}
                />

                <Text
                  onClick={handleSubmit(openMenu)}
                  className="rounded-r bg-pOrange-600 hover:bg-pOrange-700 cursor-pointer px-2 h-8 flex items-center text-white"
                >
                  Connect
                </Text>
              </div>
            )}

            {settingsButtonCondition && (
              <Button
                purpose="black"
                leftIcon="settings"
                fit
                onClick={handleCodeArea}
              >
                Settings
              </Button>
            )}

            {onlineButtonCondition && (
              <Button
                purpose="black"
                leftIcon="order"
                fit
                onClick={navigateOrdersPage}
              >
                Online
              </Button>
            )}

            {notificationButtonCondition && (
              <Button
                purpose="black"
                leftIcon="envelope"
                fit
                onClick={handleNotification}
              >
                Notifications
              </Button>
            )}

            <Button
              purpose="black"
              leftIcon="quit"
              fit
              onClick={() => navigate("/login")}
            >
              Safety Quit
            </Button>
          </div>
        </div>

        <div className="w-full mx-auto h-[calc(100vh-80px)] relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
