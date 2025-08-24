import { Component } from "react";

interface State {
  message: string;
}

export default class Exersice04 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      message: "Học code để đi làm",
    };
  }

  handleChangeMessage = () => {
    this.setState({
      message: "Học code sẽ thành công. Cố lên!!!",
    });
  };

  // Ngăn render lại dù state thay đổi
  shouldComponentUpdate(nextState: State) {
    console.log("State mới:", nextState.message);
    return false;
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleChangeMessage} style={{border: "1px, solid, black"}}>Change state</button>
      </div>
    );
  }
}
