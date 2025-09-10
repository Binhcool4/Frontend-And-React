import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: 60,
        alignItems: "center",
        margin: "30px 0",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          background: isActive ? "#ef2323" : "transparent",
          color: isActive ? "#fff" : "#111",
          padding: isActive ? "18px 28px" : "0",
          borderRadius: 2,
          fontWeight: 500,
          fontSize: 22,
          textDecoration: "none",
          transition: "all 0.2s",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/product"
        style={({ isActive }) => ({
          background: isActive ? "#ef2323" : "transparent",
          color: isActive ? "#fff" : "#111",
          padding: isActive ? "18px 28px" : "0",
          borderRadius: 2,
          fontWeight: 500,
          fontSize: 22,
          textDecoration: "none",
          transition: "all 0.2s",
        })}
      >
        Product
      </NavLink>
      <NavLink
        to="/detail"
        style={({ isActive }) => ({
          background: isActive ? "#ef2323" : "transparent",
          color: isActive ? "#fff" : "#111",
          padding: isActive ? "18px 28px" : "0",
          borderRadius: 2,
          fontWeight: 500,
          fontSize: 22,
          textDecoration: "none",
          transition: "all 0.2s",
        })}
      >
        Detail
      </NavLink>
    </nav>
  );
};

export default Header;
