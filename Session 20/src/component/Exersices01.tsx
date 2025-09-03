import { useState } from "react";

export default function Exersices01() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid #ddd" }}>
      <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
      <input
        type="text"
        placeholder="Nhập vào đây"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {inputValue.length > 5 && (
        <p
          style={{
            marginTop: "10px",
            color: "red",
            background: "#ffe6e6",
            padding: "8px",
            border: "1px solid red",
            borderRadius: "4px",
          }}
        >
          Chuỗi nhập vào dài hơn 5 ký tự!
        </p>
      )}
    </div>
  );
}
