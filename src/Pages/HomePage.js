import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Map from "../Components/Map";
import { toast } from "react-hot-toast";
const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState("");
  const [coordinates, setCoordinates] = useState([0, 0]);
  const apiKey = process.env.REACT_APP_API_KEY;

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${
    data ? inputValue : "8.8.8.8"
  }`;

  const getIpAddress = async () => {
    try {
      const { data } = await axios.get(url);
      const {
        location: { lat, lng }
      } = data;
      setCoordinates([lat, lng]);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickHandler = () => {
    if (inputValue) {
      getIpAddress();
    } else {
      toast.error("Enter IP Address");
    }
  };

  useEffect(() => {
    getIpAddress();
  }, []);

  return (
    <div>
      <div className="h-[30vh]">
        <Header
          inputValue={inputValue}
          onClickHandler={onClickHandler}
          setInputValue={setInputValue}
          data={data}
        />
      </div>
      <div className=" z-[-40] ">
        <Map coordinates={coordinates} />
      </div>
    </div>
  );
};

export default HomePage;
