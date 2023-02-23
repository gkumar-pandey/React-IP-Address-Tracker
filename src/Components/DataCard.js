import React from "react";

const DataCard = () => {
  const data = {
    ipAdd: "1823.43.3434",
    location: "Delhi india",
    Timezone: "UTC-5:00",
    ISP: "SpaceX Starlink"
  };
  return (
    <div className="bg-white  sm:w-4/5 sm:m-auto  rounded-md   ">
      <div className="flex justify-between flex-wrap sm:flex-col  ">
        <div className="m-3 sm:m-1 flex flex-col sm:items-center border-r-gray-600">
          <p className=" font-medium text-gray-500  ">IP ADDRESS</p>
          <p className="text-2xl">{data.ipAdd}</p>
        </div>
        <div className="m-3 sm:m-1 flex flex-col sm:items-center ">
          <p className=" font-medium text-gray-500  ">IP ADDRESS</p>
          <p className="text-2xl">{data.ipAdd}</p>
        </div>
        <div className="m-3 sm:m-1 flex flex-col sm:items-center">
          <p className=" font-medium text-gray-500  ">IP ADDRESS</p>
          <p className="text-2xl">{data.ipAdd}</p>
        </div>
        <div className="m-3 sm:m-1 flex flex-col sm:items-center">
          <p className=" font-medium text-gray-500  ">IP ADDRESS</p>
          <p className="text-2xl">{data.ipAdd}</p>
        </div>
        <div className="m-3 sm:m-1 flex flex-col sm:items-center">
          <p className=" font-medium text-gray-500  ">IP ADDRESS</p>
          <p className="text-2xl">{data.ipAdd}</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
