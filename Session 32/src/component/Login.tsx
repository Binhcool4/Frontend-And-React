import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Login: React.FC = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (location.state && location.state.email && location.state.password) {
      setEmail(location.state.email);
      setPassword(location.state.password);
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 320,
        margin: "40px auto",
        border: "1px solid #e5e7eb",
        borderRadius: 6,
        padding: 24,
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24, fontWeight: 500 }}>
        Đăng nhập
      </h2>
      <input
        type="email"
        placeholder="Nhập email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 16,
          border: "1px solid #e5e7eb",
          borderRadius: 6,
          fontSize: 16,
        }}
        required
      />
      <input
        type="password"
        placeholder="Nhập mật khẩu..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 16,
          border: "1px solid #e5e7eb",
          borderRadius: 6,
          fontSize: 16,
        }}
        required
      />
      <button
        type="submit"
        style={{
          width: "100%",
          background: "#2563eb",
          color: "#fff",
          padding: 12,
          border: "none",
          borderRadius: 6,
          fontSize: 16,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Đăng nhập
      </button>
    </form>
  );
};

export default Login;
