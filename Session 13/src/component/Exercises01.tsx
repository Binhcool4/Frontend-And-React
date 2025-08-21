import { Component } from 'react'
interface NameUser {
    name: string;
}
export default class Exercises01 extends Component <object,NameUser> {
  constructor (props: object) {
    super(props);
    this.state = {
        name: "Nguyen Minh Son",
    };
  } 
  render() {
    return (
      <div>
        <h2>Ho va ten: {this.state.name}</h2>
      </div>
    )
  }
}
