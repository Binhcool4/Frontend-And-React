import { Component } from "react";

interface StateTypes {
  fullname: string;
  email: string;
  password: string;
  address: string;
  message: string;
}

export default class Exercise07 extends Component<object, StateTypes> {
  private nameInput: HTMLInputElement | null = null;

  constructor(props: object) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      address: "",
      message: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullname, email, password, address } = this.state;

    if (!fullname || !email || !password) {
      this.setState({ message: "Tên, Email và Mật khẩu không được để trống" });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u: any) => u.email === email)) {
      this.setState({ message: "Email không được phép trùng" });
      return;
    }

    users.push({ fullname, email, password, address });
    localStorage.setItem("users", JSON.stringify(users));

    this.setState(
      {
        fullname: "",
        email: "",
        password: "",
        address: "",
        message: "Đăng ký thành công",
      },
      () => {
        this.nameInput?.focus();
      }
    );
  };

  render() {
    const { fullname, email, password, address, message } = this.state;

    return (
      <div style={{ width: 300, margin: "20px auto" }}>
        <h2 style={{ textAlign: "center" }}>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={(el) => {
              this.nameInput = el;
            }}
            type="text"
            placeholder="Tên sinh viên"
            value={fullname}
            onChange={(e) => this.setState({ fullname: e.target.value })}
            style={{ width: "100%", marginBottom: 10, padding: 5 }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            style={{ width: "100%", marginBottom: 10, padding: 5 }}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
            style={{ width: "100%", marginBottom: 10, padding: 5 }}
          />
          <input
            type="text"
            placeholder="Địa chỉ"
            value={address}
            onChange={(e) => this.setState({ address: e.target.value })}
            style={{ width: "100%", marginBottom: 10, padding: 5 }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "8px",
              background: "blue",
              color: "white",
              border: "none",
              borderRadius: 4,
            }}
          >
            Đăng ký
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