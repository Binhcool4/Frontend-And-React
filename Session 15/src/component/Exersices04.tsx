import { Component } from 'react'

interface StateTypes{
    range: string;
    submited: boolean;
}

export default class Exersices04 extends Component <object, StateTypes> {
  constructor (props: object){
    super(props);
    this.state = {
        range: "",
        submited: false
    };
  }  

  render() {
    const {range, submited} = this.state;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({submited: true});
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="range">Tiến độ hoàn thành: {submited && <>{range}</>} %</label><br />
            <input type="range" id="range" value={range} onChange={(e) => this.setState({range: e.target.value})}/> <br /><br />
            <button style={{border: "1px solid black", borderRadius: "0px"}}>Submit</button>
        </form>
      </div>
    )
  }
}
