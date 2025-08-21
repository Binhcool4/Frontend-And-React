import { Component } from "react";

interface Exercises07State {
  theme: "light" | "dark";
  language: "english" | "vietnamese";
}

export default class Exercises07 extends Component<object, Exercises07State> {
  constructor(props: object) {
    super(props);
    this.state = {
      theme: "light",
      language: "vietnamese",
    };
  }

  render() {
    const { theme, language } = this.state;
    const themeText = theme === "light" ? "Sáng" : "Tối";
    const languageText = language === "english" ? "Tiếng Anh" : "Tiếng Việt";
    const style = {
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
    };

    return (
      <div
        style={{
          ...style,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <h3>Nền: {themeText}</h3>
        <h3>Ngôn ngữ: {languageText}</h3>
      </div>
    );
  }
}