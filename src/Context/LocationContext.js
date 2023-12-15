import { createContext, useContext, useEffect, useReducer } from "react";

const API_KEY = "at_bxL279KiJceay38hbUAnOfl4DEZS7";
const BASE_URL = "https://geo.ipify.org/api/v2/country,city";
const LocationContext = createContext();

const initialState = {
  currentLocation: {},
  isLoading: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "location/loaded":
      return { ...state, currentLocation: action.payload, isLoading: false };

    case "rejected":
      return { ...state, error: action.payload, isLoading: false };
    default:
      throw new Error("Unknown action!");
  }
}
function LocationProvider({ children }) {
  const [{ isLoading, currentLocation, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function fetchLocation(ipAddress = "", domain = "") {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(
        `${BASE_URL}?apiKey=${API_KEY}&ipAddress=${ipAddress}&domain=${domain}`
      );
      const data = await res.json();
      console.log(data);
      if (data?.code) throw new Error(data.messages);
      dispatch({ type: "location/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "An error occurred while loading location.",
      });
    }
  }
  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{ isLoading, currentLocation, fetchLocation, error }}
    >
      {children}
    </LocationContext.Provider>
  );
}

function useLocation(params) {
  const context = useContext(LocationContext);
  if (context === undefined)
    throw new Error("LocationContext was used outside LocationProvider");
  return context;
}
export { LocationProvider, useLocation };
