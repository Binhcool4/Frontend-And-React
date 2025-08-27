import { useState } from "react";

function Select() {
  const [city, setCity] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <div style={{ padding: 12, fontFamily: "Arial, sans-serif" }}>
      <h3>Chọn thành phố</h3>
      <select value={city} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
      </select>
      {city && (
        <p>
          Thành phố: <strong>{city}</strong>
        </p>
      )}
    </div>
  );
}

export default Select;