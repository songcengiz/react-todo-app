import { useLocation } from "../Context/LocationContext";

export default function AppList() {
  const { currentLocation } = useLocation();

  const { ip: ipAddress, location, isp } = currentLocation;

  return (
    <>
      <li>
        <h4 className="list-header">IP address</h4>
        <p>{ipAddress}</p>
      </li>
      <li>
        <h4 className="list-header">Location</h4>
        <p>
          {location?.city},{location?.country}
          {location?.postalCode}
        </p>
      </li>
      <li>
        {" "}
        <h4 className="list-header">Timezone</h4>
        <p>UTC-{location?.timezone}</p>
      </li>
      <li>
        {" "}
        <h4 className="list-header">Isp</h4>
        <p>{isp}</p>
      </li>
    </>
  );
}
