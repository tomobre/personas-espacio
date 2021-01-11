import L from "leaflet";
import iconFile from "./iss.svg";

const Icon = L.icon({
  iconUrl: iconFile,
  iconRetinaUrl: iconFile,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [50, 50],
  className: "iss-icon",
});

export default Icon;
