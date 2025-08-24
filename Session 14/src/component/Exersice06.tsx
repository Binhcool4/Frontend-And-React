import { Component } from "react";

interface StateTypes {
  gender: string;
  submitted: boolean;
}

export default class Exercise06 extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      gender: "",
      submitted: false,
    };
  }

  render() {
    const { gender, submitted } = this.state;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      this.setState({ submitted: true });
    };

    return (
      <div style={{ padding: 20 }}>
        <form onSubmit={handleSubmit}>
          <label>Giới tính: </label>
          {submitted && <>{gender}</>}
          <br />
          <input type="radio" name="gender" value="Nam" checked={gender === "Nam"} onChange={(e) => this.setState({ gender: e.target.value })}/>Nam
          <br />
          <input type="radio" name="gender" value="Nữ" checked={gender === "Nữ"} onChange={(e) => this.setState({ gender: e.target.value })} />Nữ
          <br />
          <input type="radio" name="gender" value="Khác" checked={gender === "Khác"} onChange={(e) => this.setState({ gender: e.target.value })} />Khác
          <br />
          <button type="submit" style={{ marginTop: 10 }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}