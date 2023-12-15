import { useState } from "react";
import iconArrow from "../img/icon-arrow.svg";
import { useLocation } from "../Context/LocationContext";
export default function SearchBar() {
  const { fetchLocation } = useLocation();
  const [searchIpAdress, setSearchIpAdddress] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();
    console.log(searchIpAdress);
    fetchLocation(searchIpAdress);
  }

  return (
    <form className="app-form" onSubmit={HandleSubmit}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={searchIpAdress}
        onChange={(e) => setSearchIpAdddress(e.target.value)}
      />
      <button className="btn" type="submit">
        <img src={iconArrow} alt="Submit Button" />
      </button>
    </form>
  );
}
