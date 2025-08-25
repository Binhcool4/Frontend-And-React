import { Component } from "react";

interface ClockState {
  time: Date;
}

export default class Exercises07 extends Component<object, ClockState> {
  intervalId: number = 0;
  constructor(props: object) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div>
        <h2>Thời gian hiện tại: {this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}