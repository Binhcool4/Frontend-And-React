import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: 12, fontFamily: "Arial, sans-serif" }}>
      <button onClick={handleToggle}>
        {isVisible ? "Ẩn tiêu đề" : "Hiện tiêu đề"}
      </button>
      {isVisible && <h3>Tiêu đề văn bản</h3>}
    </div>
  );
}

export default Toggle;