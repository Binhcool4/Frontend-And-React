import Alert from "react-bootstrap/Alert";

export default function Exercises05() {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Alert
        variant="success"
        dismissible
        style={{ fontSize: 18, padding: 20, borderRadius: 8, marginBottom: 0 }}
      >
        Thêm tài khoản thành công.
      </Alert>
      <Alert
        variant="danger"
        dismissible
        style={{ fontSize: 18, padding: 20, borderRadius: 8, marginBottom: 0 }}
      >
        Thêm mới tài khoản thất bại.
      </Alert>
      <Alert
        variant="warning"
        dismissible
        style={{ fontSize: 18, padding: 20, borderRadius: 8, marginBottom: 0 }}
      >
        Tên không được để trống.
      </Alert>
    </div>
  );
}