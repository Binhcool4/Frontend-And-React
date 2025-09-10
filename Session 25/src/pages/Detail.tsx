import { NavLink } from "react-router-dom";

const navStyle = {
  display: "flex",
  gap: 60,
  alignItems: "center",
  margin: "30px 0",
  justifyContent: "center",
  fontFamily: "Arial, sans-serif",
};

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  background: isActive ? "#ef2323" : "transparent",
  color: isActive ? "#fff" : "#111",
  padding: isActive ? "18px 28px" : "0",
  borderRadius: 2,
  fontWeight: 500,
  fontSize: 22,
  textDecoration: "none",
  transition: "all 0.2s",
});
const Detail = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav style={navStyle}>
        <NavLink to="/" end style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/product" style={linkStyle}>
          Product
        </NavLink>
        <NavLink to="/detail" style={linkStyle}>
          Detail
        </NavLink>
      </nav>
      <h2 style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        Detail
      </h2>
    </div>
  );
};

export default Detail;
