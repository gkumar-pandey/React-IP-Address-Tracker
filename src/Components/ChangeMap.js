import React from "react";
import { useMap } from "react-leaflet";

const ChangeMap = ({ coordinates }) => {
  const map = useMap();
  map.flyTo(coordinates, map.getZoom());
  return null;
};

export default ChangeMap;
