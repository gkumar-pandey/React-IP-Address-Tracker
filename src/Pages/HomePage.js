import React from "react";
import Header from "../Components/Header";
import Map from "../Components/Map";

const HomePage = () => {
  const getIpAddress = async () => {};
  return (
    <div>
      <div className="h-[30vh]">
        <Header />
      </div>
      <div className="border border-black z-[-40] ">
        <Map />
      </div>
    </div>
  );
};

export default HomePage;
