import { useLocation } from "../Context/LocationContext";
import AppList from "./AppList";
import Spinner from "./Spinner";
import Message from "./Message";

export default function AppNav() {
  const { isLoading, error } = useLocation();
  if (error)
    return (
      <div className="app-sidebar">
        <Message />
      </div>
    );
  return (
    <div className="app-sidebar">
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className="app-sidebar-list">
          <AppList />
        </ul>
      )}
    </div>
  );
}
