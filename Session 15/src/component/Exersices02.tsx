import { Component } from 'react'

interface StateTypes {
    color: string;
    submited: boolean;
}

export default class Exersices02 extends Component <object, StateTypes> {
  constructor (props: object){
    super(props);
    this.state = {
        color: "",
        submited: false
    };
  }  
  render() {
    const {color, submited} = this.state;
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({submited: true});
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
            <h2>Color: {submited && <>{color}</>}</h2>
            <h3>Form</h3>
            <label htmlFor="color">Màu sắc</label><br />
            <input type="color" id="color" value={color} onChange={(e) => this.setState({color: e.target.value})}/><br />
            <button style={{border: "1px solid black", borderRadius: "0px"}}>Submit</button>
        </form>
      </div>
    )
  }
}

