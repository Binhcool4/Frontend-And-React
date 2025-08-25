import { Component } from 'react'

interface StateTypes{
    date: string;
    submited: boolean;
}

export default class Exersices03 extends Component <object, StateTypes> {
  constructor (props: object){
    super(props);
    this.state = {
        date: "",
        submited: false
    };
  }  

  render() {
    const {date, submited} = this.state;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({submited: true});
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Ngày sinh: {submited && <>{date}</>}</label><br />
            <input type="date" id="date" value={date} onChange={(e) => this.setState({date: e.target.value})}/> <br /><br />
            <button style={{border: "1px solid black", borderRadius: "0px"}}>Submit</button>
        </form>
      </div>
    )
  }
}
