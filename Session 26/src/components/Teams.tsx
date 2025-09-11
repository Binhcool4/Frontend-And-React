import { Outlet } from "react-router-dom";

function Teams() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Teams</h2>
      <Outlet />
    </div>
  );
}

export default Teams;
