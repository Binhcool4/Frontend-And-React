import { useAppDispatch, useAppSelector } from "../hooks/CustomHooks";
import { setViewMode } from "../slices/viewModeSlice";
import type { RootState } from "../stores";

const DataView = () => {
  const { currentViewMode, data } = useAppSelector(
    (state: RootState) => state.viewMode
  );
  const dispatch = useAppDispatch();

  const handleSetListMode = () => {
    dispatch(setViewMode("list"));
  };

  const handleSetGridMode = () => {
    dispatch(setViewMode("grid"));
  };

  const listStyles = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  };

  const listItemStyles = {
    padding: "20px",
    backgroundColor: "#e74c3c",
    color: "#ffffff",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60px",
    fontSize: "24px",
    fontWeight: "bold",
  };
  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "10px",
  };

  const gridItemStyles = {
    padding: "40px 20px",
    backgroundColor: "#e74c3c",
    color: "#ffffff",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    aspectRatio: "1",
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={handleSetListMode}
        >
          List mode
        </button>
        <button
          onClick={handleSetGridMode}
        >
          Grid mode
        </button>
      </div>

      <div style={currentViewMode === "list" ? listStyles : gridStyles}>
        {data.map((item) => (
          <div
            key={item.id}
            style={currentViewMode === "list" ? listItemStyles : gridItemStyles}
          >
            {item.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataView;
