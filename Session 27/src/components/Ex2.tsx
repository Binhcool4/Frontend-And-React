import { Outlet } from "react-router-dom";

function Ex2() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          background: "#0080ff",
          padding: "18px 0",
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "28px",
        }}
      >
        Trang chi tiết sản phẩm
      </div>
      <div style={{ minHeight: "90vh", background: "#fafafa" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Ex2;
