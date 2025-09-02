type ItemProps = {
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
};

function Item({ index, isSelected, onSelect }: ItemProps) {
  console.log("Render item:", index);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        margin: "4px 0",
        border: "1px solid #ccc",
        backgroundColor: isSelected ? "#aee" : "white",
      }}
    >
      <span>Item {index}</span>
      <button onClick={() => onSelect(index)}>
        {isSelected ? "Selected" : "Select"}
      </button>
    </div>
  );
}
export default Item;