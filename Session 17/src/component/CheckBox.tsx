import React, { useState } from "react";

function Checkbox() {
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  return (
    <div style={{ padding: 12, fontFamily: "Arial, sans-serif" }}>
      <h3>Chọn sở thích</h3>
      <label>
        <input type="checkbox" value="Đọc sách" onChange={handleChange} /> Đọc
        sách
      </label>
      <br />
      <label>
        <input type="checkbox" value="Nghe nhạc" onChange={handleChange} /> Nghe
        nhạc
      </label>
      <br />
      <label>
        <input type="checkbox" value="Du lịch" onChange={handleChange} /> Du
        lịch
      </label>
      <br />
      <label>
        <input type="checkbox" value="Thể thao" onChange={handleChange} /> Thể
        thao
      </label>
      <p>
        Sở thích:{" "}
        {selected.length > 0 ? selected.join(", ") : "Chưa chọn gì cả"}
      </p>
    </div>
  );
}

export default Checkbox;