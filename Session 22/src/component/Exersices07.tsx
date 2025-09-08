import Toast from "react-bootstrap/Toast";

export default function Exercises07() {
  return (
    <div
      style={{
        minHeight: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Toast
        show
        style={{
          minWidth: 400,
          border: "1px solid #ddd",
          boxShadow: "0 2px 8px #0001",
        }}
      >
        <Toast.Header
          closeButton={true}
          style={{ borderBottom: "1px solid #ddd" }}
        >
          <strong className="me-auto" style={{ fontWeight: 600 }}>
            Cảnh báo
          </strong>
        </Toast.Header>
        <Toast.Body style={{ fontSize: 18 }}>Lỗi kết nối máy chủ.</Toast.Body>
      </Toast>
    </div>
  );
}