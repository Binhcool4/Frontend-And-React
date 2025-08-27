import { useState } from "react";

function Form() {
  const [value, setValue] = useState("");
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ padding: 12, fontFamily: "Arial, sans-serif" }}>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={value}
        onChange={handleChange}
      />
      <p>
        <strong>{value}</strong>
      </p>
    </div>
  );
}

export default Form;