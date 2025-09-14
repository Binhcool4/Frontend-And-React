import { Link, useLocation } from "react-router-dom";

const navStyle = {
  background: "#0080ff",
  padding: "18px 0",
  display: "flex",
  justifyContent: "space-around",
  gap: "60px",
  fontWeight: "bold",
  fontSize: "21px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  borderBottom: "3px solid transparent",
  padding: "0 8px",
};

const activeLinkStyle = {
  color: "#fff",
  textDecoration: "underline",
  borderBottom: "3px solid transparent",
  padding: "0 8px",
  
};

function Navbar() {
  const location = useLocation();
  return (
    <nav style={navStyle}>
      <Link
        to="/"
        style={location.pathname === "/" ? activeLinkStyle : linkStyle}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={location.pathname === "/about" ? activeLinkStyle : linkStyle}
      >
        About
      </Link>
      <Link
        to="/contact"
        style={location.pathname === "/contact" ? activeLinkStyle : linkStyle}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
