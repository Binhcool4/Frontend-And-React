import { Component } from "react";

interface User {
  firstName: string;
  lastName: string;
}

interface Props {
  user: User;
}

export default class FormatName extends Component<Props> {
  formatName(user: User): string {
    return `${user.lastName} ${user.firstName}`;
  }

  render() {
    const { user } = this.props;
    return <div>Họ và tên: {this.formatName(user)}</div>;
  }
}