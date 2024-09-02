import React from "react";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const OnlineStatus = () => {
  useOnlineStatus();
  const onlineStatus = useSelector((store) => store.networkStatusSlice.onlineStatus);
  return (
    <>
      {!onlineStatus && (
        <div className="flex justify-center items-center flex-row pl-4 py-1 gap-2 border shadow overflow-hidden dark:bg-gray-800 ">
          <span className="flex mx-3 item-center justify-center leading-none rounded-full dark:bg-red-600 dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 font-bold"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <div className="flex justify-center p-2">
            <p className="text-sm font-semibold dark:text-gray-50">
              Seems like you are offline. Please check your internet connection
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default OnlineStatus;
