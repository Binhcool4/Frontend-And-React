import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f8fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 16px #0001",
          padding: 40,
          maxWidth: 420,
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 10 }}>
          Trang bạn tìm không tồn tại.
        </h2>
        <div style={{ color: "#666", fontSize: 17, marginBottom: 28 }}>
          Có thể đường dẫn bạn nhập sai hoặc trang đã được di chuyển.
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginBottom: 18,
          }}
        >
          <button
            style={{
              background: "#4f46e5",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              fontSize: 17,
              fontWeight: 500,
              padding: "10px 24px",
              cursor: "pointer",
              boxShadow: "0 1px 4px #0001",
            }}
            onClick={() => navigate("/")}
          >
            Quay về trang chủ
          </button>
          <button
            style={{
              background: "#fff",
              color: "#222",
              border: "1px solid #bbb",
              borderRadius: 6,
              fontSize: 17,
              fontWeight: 500,
              padding: "10px 24px",
              cursor: "pointer",
            }}
            onClick={() => navigate(-1)}
          >
            Quay lại
          </button>
        </div>
        <div style={{ color: "#888", fontSize: 14 }}>
          Nếu vẫn để tiếp tục, kiểm tra URL hoặc liên hệ quản trị viên.
        </div>
      </div>
    </div>
  );
}

export default NotFound;
