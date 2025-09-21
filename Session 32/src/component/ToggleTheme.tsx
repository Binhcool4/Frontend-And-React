import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";

const ToggleTheme = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <div
      style={{
        background: darkMode ? "#000" : "#fff",
        color: darkMode ? "#fff" : "#222",
        borderRadius: 8,
        padding: 24,
        width: 350,
        minHeight: 180,
        margin: 16,
        boxSizing: "border-box",
      }}
    >
      <label style={{ display: "flex", alignItems: "center", fontSize: 22 }}>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleChange}
          style={{ width: 24, height: 24, marginRight: 8 }}
        />
        {darkMode ? "Tối" : "Sáng"}
      </label>
    </div>
  );
};

export default ToggleTheme;
