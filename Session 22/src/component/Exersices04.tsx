import Dropdown from "react-bootstrap/Dropdown";
export default  function Exercises04() {
  return (
    <div style={{ width: 220 }}>
      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          style={{
            width: "100%",
            border: "1px solid #222",
            fontSize: 24,
            fontWeight: 400,
            color: "#333",
            textAlign: "left",
          }}
        >
          Nguyễn Văn Nam
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ width: "100%", fontSize: 22, padding: 8 }}>
          <Dropdown.Item style={{ padding: 10 }}>Cài đặt</Dropdown.Item>
          <Dropdown.Item style={{ padding: 10 }}>Đổi mật khẩu</Dropdown.Item>
          <Dropdown.Item style={{ padding: 10 }}>Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}