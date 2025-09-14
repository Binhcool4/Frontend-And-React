import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function LayoutEx06() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <div style={{ minHeight: "90vh", background: "#fafafa" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutEx06;
