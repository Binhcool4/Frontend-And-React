import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Student() {
  const [studentName, setStudentName] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("studentName") || "";
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim()) {
      navigate(`/student?studentName=${studentName}`);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center", gap: 8 }}
      >
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          style={{
            width: 400,
            height: 40,
            borderRadius: 8,
            border: "1px solid #e0e0e0",
            padding: "0 16px",
            fontSize: 16,
          }}
        />
        <button
          type="submit"
          style={{
            height: 40,
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "0 32px",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Tìm kiếm
        </button>
      </form>
      <h2>Student: {name}</h2>
    </div>
  );
}

export default Student;
