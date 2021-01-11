import React from "react";
import styled from "styled-components/macro";
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "./icon";

const Component = styled.div`
  width: 100%;

  & > div {
    width: 100%;
    height: 400px;
  }
`;

const Map = ({ position, zoom, onViewportChange }) => {
  return (
    <Component>
      <LeafletMap
        center={position}
        zoom={zoom}
        onViewportChange={onViewportChange}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        <Marker position={position} icon={Icon}>
          <Popup>
            Latitude: {position.lat} <br /> Longitude: {position.lng}
          </Popup>
          <Circle center={position} radius={75000}></Circle>
        </Marker>
      </LeafletMap>
    </Component>
  );
};

export default Map;
