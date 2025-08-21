import { Component } from "react";

interface ChildrenProps {
  fullName: string;
};

export default class Children_Comp extends Component<ChildrenProps> {
  render() {
    return (
      <div>
        <h2>Họ và tên bên component con: {this.props.fullName}</h2>
      </div>
    );
  }
}