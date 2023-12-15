import Header from "./Components/Header";
import AppNav from "./Components/AppNav";
import SearchBar from "./Components/SearchBar";
import Map from "./Components/Map";

import { LocationProvider } from "./Context/LocationContext";

export default function App() {
  return (
    <LocationProvider>
      <div className="app">
        <div className="app-section-first">
          <Header />
          <SearchBar />
          <AppNav />
        </div>
        <div>
          {" "}
          <Map />
        </div>
      </div>
    </LocationProvider>
  );
}
