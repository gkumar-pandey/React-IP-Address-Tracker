import React from "react";
import { bgImgDesktop, arrowIcon } from "../Assets";
import DataCard from "./DataCard";

const Header = () => {
  return (
    <div>
      <div className="border border-red-700 h-[30vh] " id="bg-img"></div>
      <div className=" absolute left-0 top-0 border border-black w-full h-full flex flex-col items-center pt-6 ">
        <p className=" text-3xl font-bold text-white ">IP Address Tracker</p>
        <div className="mt-8 flex justify-center w-full   ">
          <div className="flex w-[40%] md:w-[60%] sm:w-[80%]   ">
            <input
              className=" w-full p-2  rounded-l-md focus:outline-none "
              placeholder="Search for any IP address or domain"
              type="text"
            />
            <button className="bg-gray-800 flex rounded-r-md items-center justify-center p-3">
              <img src={arrowIcon} />
            </button>
          </div>
        </div>
        <div className="p-3 w-4/6 sm:p-5 sm:w-full  mt-[5vh] sm:mt-1 md:mt-5 z-[1000]">
          <DataCard />
        </div>
      </div>
    </div>
  );
};

export default Header;
