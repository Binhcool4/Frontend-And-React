import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAccount } from "../store/account";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerAccount(email, password));
    navigate("/login", { state: { email, password } });
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
        Đăng ký
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
        Đăng ký
      </button>
    </form>
  );
};

export default Register;
