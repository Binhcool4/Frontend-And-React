import { Component } from 'react'

interface typeState{
    count: number
}
export default class Exersices04 extends Component<object,typeState> {
    constructor(props:object){
        super(props)
        this.state={
            count:0
        }
    }
    handClick=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div style={{padding:30}}>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handClick}>Click me</button>
      </div>
    )
  }
}