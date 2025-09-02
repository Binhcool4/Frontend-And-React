import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "./Ex02.css";
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <h1>My Themed App</h1>
      <button onClick={toggleTheme}>
        Chuyển sang theme {theme === "light" ? "TỐI" : "SÁNG"}
      </button>
    </header>
  );
}

export default Header;
