import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import arrowIcon from "../Assets/images/icon-location.svg";
import { Icon } from "leaflet";
import ChangeMap from "./ChangeMap";

const Map = ({ coordinates }) => {
  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "70vh" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={new Icon({ iconUrl: arrowIcon })}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ChangeMap coordinates={coordinates} />
      </MapContainer>
    </div>
  );
};

export default Map;
