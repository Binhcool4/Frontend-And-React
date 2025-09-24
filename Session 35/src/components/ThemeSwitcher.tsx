import { useAppDispatch, useAppSelector } from "../hooks/CustomHooks";
import { toggleTheme } from "../slices/themeSlice";
import type { RootState } from "../stores";

const ThemeSwitcher = () => {
  const currentTheme = useAppSelector(
    (state: RootState) => state.theme.currentTheme
  );
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const themeStyles = {
    light: {
      container: {
        backgroundColor: "#ffffff",
        color: "#000000",
        border: "1px solid #e0e0e0",
        padding: "40px",
        margin: "20px",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        width: "100px",
      },
      button: {
        backgroundColor: "#ffffff",
        color: "#6c757d",
        border: "2px solid #6c757d",
        padding: "10px 20px",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "500",
        transition: "all 0.3s ease",
      },
    },
    dark: {
      container: {
        backgroundColor: "#2d2d2d",
        color: "#ffffff",
            border: "1px solid #444444",
        padding: "40px",
        margin: "20px",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        width: "100px",
      },
      button: {
        backgroundColor: "transparent",
        color: "#ffffff",
        border: "2px solid #ffffff",
        padding: "10px 20px",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "500",
        transition: "all 0.3s ease",
      },
    },
  };

  const currentStyles = themeStyles[currentTheme];

  return (
    <div style={currentStyles.container}>
      <button onClick={handleToggleTheme} style={currentStyles.button}>
        {currentTheme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
