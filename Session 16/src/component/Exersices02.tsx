import { Component } from "react";

interface typeState {
  text: string;
  check: boolean;
}

export default class Exersices02 extends Component<object, typeState> {
  constructor(props: object) {
    super(props);
    this.state = {
      text: "Vui long dang nhap de tiep tuc",
      check: true,
    };
  }
  handClick = () => {
    this.setState({
      text: this.state.check
        ? "Xin chao ,User"
        : "Vui long dang nhap de tiep tuc",
      check: !this.state.check,
    });
  };
  
  render() {
    const btn = this.state.check ? "Dang nhap" : "Dang xuat";
    return (
      <div
        style={{
          backgroundColor: "rgba(224,247,250,1)",
          width: "fitContent",
          height: "fitContent",
          borderRadius: 8,
          padding: 30,
          display:'flex',
          alignItems:'center',
          flexDirection:'column'
        }}
      >
        <h2>{this.state.text}</h2>
        <button
          style={{
            backgroundColor: "rgba(25,118,210,1",
            borderRadius: 8,
            color: "white",
          }}
          onClick={this.handClick}
        >
          {btn}
        </button>
      </div>
    );
  }
}