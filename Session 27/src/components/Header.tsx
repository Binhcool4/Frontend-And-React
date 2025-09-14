import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <NavLink
          to="/ex06"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/ex06/product"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/ex06/detail"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Detail
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
