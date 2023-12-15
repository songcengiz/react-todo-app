import { useLocation } from "../Context/LocationContext";
import iconUrl from "../img/icon-location.svg";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
export default function Map() {
  const { isLoading, currentLocation } = useLocation();
  const { location } = currentLocation;
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const customIcon = new Icon({
    iconUrl,
    iconSize: [38, 38],
  });

  useEffect(() => {
    if (location) {
      setMapPosition([location.lat, location.lng]);
    }
  }, [location]);
  if (isLoading) return <Spinner />;
  return (
    <div className="app-section-second">
      <MapContainer
        className="map"
        center={mapPosition}
        zoom={17}
        scrollWheelZoom={true}
      >
        <ChangeView center={mapPosition} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={mapPosition} icon={customIcon}>
          <Popup>{location?.city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}
