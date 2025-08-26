import { Component } from "react";

interface StateType {
  isDarkMode: boolean;
}

export default class Exersices06 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState(
      (prevState) => ({ isDarkMode: !prevState.isDarkMode }),
      () => {
        // Sau khi state cập nhật, thay đổi background toàn trang
        if (this.state.isDarkMode) {
          document.body.style.backgroundColor = "#1a1a1a";
          document.body.style.color = "#ffffff";
        } else {
          document.body.style.backgroundColor = "#ffffff";
          document.body.style.color = "#000080";
        }
      }
    );
  };

  componentDidMount() {
    // Đặt màu nền mặc định khi load trang
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000080";
  }

  render() {
    const { isDarkMode } = this.state;

    const containerStyle = {
      padding: "20px",
      textAlign: "center" as const,
      fontSize: "18px",
      fontFamily: "Arial, sans-serif",
      width: "300px",
      margin: "50px auto",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      backgroundColor: isDarkMode ? "#333333" : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#000080",
    };

    const buttonStyle = {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px",
    };

    return (
      <div style={containerStyle}>
        <span style={{ display: "inline-block", marginBottom: "10px" }}>
          {isDarkMode ? (
            <>
              <span style={{ marginRight: "10px" }}>🌙</span> Chế độ Tối đang
              bật
            </>
          ) : (
            <>
              <span style={{ marginRight: "10px" }}>🌅</span> Chế độ Sáng đang
              bật
            </>
          )}
        </span>
        <br />
        <button style={buttonStyle} onClick={this.toggleTheme}>
          Chuyển theme
        </button>
      </div>
    );
  }
}