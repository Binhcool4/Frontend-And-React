import { Component } from "react";
import Children_Comp from "./Children_Comp";

interface ParentState {
  fullName: string;
}

export default class Parent_Comp extends Component<object, ParentState> {
  constructor(props: object) {
    super(props);
    this.state = {
      fullName: "Triệu Quốc Bình ",
    };
  }

  render() {
    return (
      <div>
        <h2>Họ và tên bên component cha: {this.state.fullName}</h2>
        <Children_Comp fullName={this.state.fullName} />
      </div>
    );
  }
}