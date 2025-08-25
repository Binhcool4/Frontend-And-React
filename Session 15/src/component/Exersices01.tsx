import { Component } from 'react'

interface StateTypes {
    email: string;
}
export default class Exersices01 extends Component <object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
        email: ""
    }
  }

  render() {
    const {email} = this.state;
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state);
    }
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" value={email} onChange={(e) => this.setState({email: e.target.value})} style={{padding: "9px 0px"}}/>
            <button style={{border: "1px solid black", borderRadius: "0px"}}>Submit</button>
        </form>
      </div>
    )
  }
}
