import{ useState } from "react";

function CounText() {
  const [text, setText] = useState("");
  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const charCount = text.length;

  return (
    <div style={{ padding: 12, fontFamily: "Arial, sans-serif" }}>
      <textarea
        rows={4}
        cols={40}
        placeholder="Nhập văn bản..."
        value={text}
        onChange={handleChange}
      />
      <p>
        Số ký tự: <strong>{charCount}</strong>
      </p>
    </div>
  );
}

export default CounText;