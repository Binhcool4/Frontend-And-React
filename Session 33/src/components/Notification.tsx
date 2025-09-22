import { useSelector } from "react-redux";
import type { RootState } from "../reducers/store";
import "../styles/Notification.css";

function Notification() {
  const message = useSelector((state: RootState) => state.notification);
  if (!message) return null;
  return <div className="notification-success">{message}</div>;
}

export default Notification;
