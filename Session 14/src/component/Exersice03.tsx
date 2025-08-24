import { Component } from 'react'

interface State {
    name: string;
}

export default class Exersice03 extends Component <object, State> {
  constructor (props: object) {
    super(props);
    this.state = {
        name: "Rikkei Academy"
    };
  }
  
  changeName = () => {
    this.setState({name: "RikkeiSoft"})
  }

  render() {
    return (
      <div>
        <h2>Company: {this.state.name}</h2>
        <button onClick={this.changeName} style={{border: "1px, solid, black"}}>Change state</button>
      </div>
    )
  }
}
