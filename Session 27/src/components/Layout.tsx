import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function Layout() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <div style={{ minHeight: "90vh", background: "#fafafa" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
