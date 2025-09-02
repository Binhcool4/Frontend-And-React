import { useState, useMemo } from "react";
import Item from "./Item";

function Exercises10() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const items = useMemo(() => Array.from({ length: 100 }, (_, i) => i), []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách 100 item</h2>
      <div
        style={{ height: "400px", overflowY: "auto", border: "1px solid #aaa" }}
      >
        {items.map((i) => (
          <Item
            key={i}
            index={i+1}
            isSelected={selectedIndex === i+1}
            onSelect={setSelectedIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default Exercises10;
