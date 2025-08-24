import { Component } from 'react'

interface State {
  userName: string;
}

export default class Notification extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  componentDidMount(): void {
    this.setState({ userName: "Nguyễn Văn A" });
    console.log("Component duoc mount");
  }

  render() {
    return (
      <div>
        <h2>Họ và tên: {this.state.userName}</h2>
      </div>
    );
  }
}
