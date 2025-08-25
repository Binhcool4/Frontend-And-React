import { Component } from "react";

interface CounterState {
  count: number;
}

export default class Exercises08 extends Component<object, CounterState> {
  intervalId: number = 0;

  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1) % 11,
      }));
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
        <h2>Counter: {this.state.count}</h2>
      </div>
    );
  }
}