import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password || !confirmPassword) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu nhập lại không khớp.");
      return;
    }
    // Lấy danh sách user từ localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u: any) => u.email === email)) {
      setError("Email đã tồn tại.");
      return;
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div
      className="register-container"
      style={{
        maxWidth: 440,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        padding: 32,
        border: "1px solid #f0f0f0",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: 700,
          marginBottom: 28,
        }}
      >
        Create account
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 18 }}>
          <label style={{ fontWeight: 500, display: "block", marginBottom: 8 }}>
            Your email
          </label>
          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "93%",
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              fontSize: 16,
              outline: "none",
              background: "#f9fafb",
            }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{ fontWeight: 500, display: "block", marginBottom: 8 }}>
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "93%",
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              fontSize: 16,
              outline: "none",
              background: "#f9fafb",
            }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{ fontWeight: 500, display: "block", marginBottom: 8 }}>
            Confirm password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              width: "93%",
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              fontSize: 16,
              outline: "none",
              background: "#f9fafb",
            }}
          />
        </div>
        {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
        <button
          type="submit"
          style={{
            width: "100%",
            background: "#2563eb",
            color: "#fff",
            fontWeight: 500,
            fontSize: 18,
            border: "none",
            borderRadius: 8,
            padding: "10px 0",
            marginBottom: 18,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Create an account
        </button>
      </form>
      <div style={{ textAlign: "center", color: "#6b7280", fontSize: 15 }}>
        Already have an account?{" "}
        <span
          style={{
            color: "#272727ff",
            fontWeight: 500,
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate("/login")}
        >
          Login here
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
