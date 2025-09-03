import { useState, useEffect } from "react";

export default function Exersices04() {
  const [username, setUsername] = useState("");

  // Cập nhật tiêu đề trang khi username thay đổi
  useEffect(() => {
    if (username.trim() === "") {
      document.title = "Trang của tôi";
    } else {
      document.title = `Xin chào, ${username}`;
    }
  }, [username]);

  return (
    <div>
      <h2>Nhập tên người dùng</h2>
      <input
        type="text"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        placeholder="Nhập tên..."
      />
    </div>
  );
}
