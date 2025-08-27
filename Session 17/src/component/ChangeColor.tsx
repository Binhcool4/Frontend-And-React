import { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("black");

  const handleChangeColor = () => {
    setColor(color === "black" ? "red" : "black");
  };

  return (
    <div style={{ padding: 12, fontFamily: "Arial, sans-serif" }}>
      <h3 style={{ color: color }}>Tiêu đề văn bản</h3>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}

export default ChangeColor;