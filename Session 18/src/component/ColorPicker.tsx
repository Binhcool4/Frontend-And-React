import React, { useState, useCallback } from "react";

const ColorPicker: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#ffffffff"); 
  const handleChangeColor = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedColor(event.target.value);
    },[]);

  return (
    <div>
      <h2>Color Picker</h2>
      <label htmlFor="">Màu người dùng chọn</label><br />
      <input
        type="color"
        value={selectedColor}
        onChange={handleChangeColor}
      />
      <div style={{ marginTop: "20px" }}>
        <p>màu hiển thị: </p>
        <span
          style={{
            display: "inline-block",
            width: "100px",
            height: "50px",
            backgroundColor: selectedColor,
            border: "1px solid #000",
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;