import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "", role: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = { email: "admin@gmail.com", password: "123456", role: "admin" };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      form.email === user.email &&
      form.password === user.password &&
      form.role === user.role
    ) {
      setError("");
      navigate("/account");
    } else {
      setError("Thông tin đăng nhập không đúng!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 350,
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
      <input
        type="email"
        name="email"
        placeholder="Nhập email"
        value={form.email}
        onChange={handleChange}
        style={{ height: 32, padding: "0 8px" }}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Nhập mật khẩu"
        value={form.password}
        onChange={handleChange}
        style={{ height: 32, padding: "0 8px" }}
        required
      />
      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        style={{ height: 32 }}
        required
      >
        <option value="">-- Chọn quyền --</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button
        type="submit"
        style={{
          height: 32,
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 4,
        }}
      >
        Đăng nhập
      </button>
      {error && (
        <div style={{ color: "red", textAlign: "center" }}>{error}</div>
      )}
    </form>
  );
}

export default Login;
