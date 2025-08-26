import { Component } from "react";

interface StateType {
  name: string;
  email: string;
  age: string;
  error: string;
  submitted: boolean;
}

export default class Exersices05 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, age } = this.state;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", submitted: false });
      return;
    }
    if (Number(age) < 0) {
      this.setState({ error: "Tuổi không được âm", submitted: false });
      return;
    }

    this.setState({ error: "", submitted: true });
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    });
  };

  render() {
    const { name, email, age, error, submitted } = this.state;

    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          color: "#333333",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          width: "400px",
          margin: "20px auto",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            marginBottom: "20px",
            fontSize: "18px",
          }}
        >
          <span style={{ marginRight: "10px" }}>📋</span> Nhập thông tin người
          dùng
        </span>

        <form
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            placeholder="Họ tên"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
            style={{
              backgroundColor: "#00c4cc",
              color: "#000080",
              border: "none",
              padding: "12px",
              borderRadius: "5px",
              width: "100%",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            style={{
              backgroundColor: "#00c4cc",
              color: "#000080",
              border: "none",
              padding: "12px",
              borderRadius: "5px",
              width: "100%",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />
          <input
            type="number"
            placeholder="Tuổi"
            value={age}
            onChange={(e) => this.setState({ age: e.target.value })}
            style={{
              backgroundColor: "#00c4cc",
              color: "#000080",
              border: "none",
              padding: "12px",
              borderRadius: "5px",
              width: "100%",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <div style={{ marginBottom: "10px" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Gửi
            </button>
            <button
              type="button"
              onClick={this.handleReset}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Xóa tất cả
            </button>
          </div>

          {error && (
            <div
              style={{ color: "#dc3545", fontSize: "14px", marginTop: "10px" }}
            >
              <span style={{ marginRight: "5px" }}>⚠️</span> {error}
            </div>
          )}
        </form>

        {submitted && !error && (
          <div
            style={{
              backgroundColor: "#e6f0fa",
              color: "#000080",
              padding: "15px",
              borderRadius: "5px",
              marginTop: "15px",
            }}
          >
            <span style={{ marginRight: "5px" }}>✅</span> Thông tin đã nhập:
            <br />
            Họ tên: {name}
            <br />
            Email: {email}
            <br />
            Tuổi: {age}
          </div>
        )}
      </div>
    );
  }
}