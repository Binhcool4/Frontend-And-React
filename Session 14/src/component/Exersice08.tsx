import { Component } from "react";

interface StateTypes {
  email: string;
  password: string;
  message: string;
}

export default class Exercise08 extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ message: "Email và Mật khẩu không được để trống" });
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (user) {
      this.setState({ message: "Đăng nhập thành công" });
    } else {
      this.setState({ message: "Đăng nhập thất bại" });
    }
  };

  render() {
    const { email, password, message } = this.state;

    return (
      <div style={{ width: "300px", margin: "20px auto" }}>
        <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            style={{ width: "285px", marginBottom: 10, padding: 5 }}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
            style={{ width: "285px", marginBottom: 10, padding: 5 }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 8,
              background: "blue",
              color: "white",
              border: "none",
              borderRadius: 4,
            }}
          >
            Đăng nhập
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: 10,
              color: message.includes("thành công") ? "green" : "red",
            }}
          >
            {message}
          </p>
        )}
      </div>
    );
  }
}