import { useLocation } from "../Context/LocationContext";

function Message() {
  const { error } = useLocation();
  return (
    <p className="message">
      <span role="img">👋</span> {error}
    </p>
  );
}

export default Message;
