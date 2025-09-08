import Spinner from "react-bootstrap/Spinner";

export default function Exercises06() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 220,
        justifyContent: "center",
      }}
    >
      <Spinner
        animation="border"
        role="status"
        style={{ width: 60, height: 60, borderWidth: 8, color: "#1677ff" }}
      />
      <Spinner
        animation="border"
        role="status"
        style={{ width: 60, height: 60, borderWidth: 8, color: "#6c757d" }}
      />
      <Spinner
        animation="border"
        role="status"
        style={{ width: 60, height: 60, borderWidth: 8, color: "#219653" }}
      />
    </div>
  );
}