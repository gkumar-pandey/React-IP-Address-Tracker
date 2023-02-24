import React from "react";
import { bgImgDesktop, arrowIcon } from "../Assets";
import DataCard from "./DataCard";

const Header = ({ inputValue, setInputValue, onClickHandler, data }) => {
  return (
    <div>
      <div className="  h-[30vh] " id="bg-img"></div>
      <div className=" absolute left-0 top-0   w-full h-full flex flex-col items-center pt-6 ">
        <p className=" text-2xl font-bold text-white ">IP Address Tracker</p>
        <div className="mt-8 flex justify-center w-full   ">
          <div className="flex w-[40%] md:w-[60%] sm:w-[80%]   ">
            <input
              value={inputValue}
              className=" w-full p-3 text-l  rounded-l-xl focus:outline-none "
              placeholder="Search for any IP or domain"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={() => onClickHandler()}
              className="bg-gray-800 flex  cursor-pointer rounded-r-xl items-center justify-center p-5"
            >
              <img src={arrowIcon} />
            </button>
          </div>
        </div>
        <div className="p-3 w-4/6 sm:p-5 sm:w-full  mt-[5vh] sm:mt-1 md:mt-5 z-[1000]">
          <DataCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default Header;
