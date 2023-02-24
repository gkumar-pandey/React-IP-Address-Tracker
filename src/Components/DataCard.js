import React from "react";

const DataCard = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <div className="bg-white p-5  sm:w-4/5 sm:m-auto  rounded-xl   ">
            <div className="flex justify-between flex-wrap sm:flex-col  ">
              <div className="m-3 sm:m-1 flex flex-col sm:items-center border-r-gray-600">
                <p className=" font-medium text-gray-500 sm:text-sm ">
                  IP ADDRESS
                </p>
                <p className="text-2xl my-2 font-semibold sm:text-lg sm:my-0 ">
                  {data.ip}
                </p>
              </div>
              <div className="m-3 sm:m-1 flex flex-col sm:items-center ">
                <p className=" font-medium text-gray-500 sm:text-sm  ">
                  LOCATION
                </p>
                <p className="text-2xl my-2 font-semibold sm:text-lg sm:my-0">
                  {data.location.city}
                </p>
              </div>
              <div className="m-3 sm:m-1 flex flex-col sm:items-center">
                <p className=" font-medium text-gray-500 sm:text-sm ">
                  TIMEZONE
                </p>
                <p className="text-2xl my-2 font-semibold sm:text-lg sm:my-0">
                  {data.location.timezone}
                </p>
              </div>
              <div className="m-3 sm:m-1 flex flex-col sm:items-center">
                <p className=" font-medium text-gray-500  sm:text-sm ">ISP</p>
                <p className="text-2xl my-2 font-semibold sm:text-lg sm:my-0">
                  {data.isp}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export default DataCard;
