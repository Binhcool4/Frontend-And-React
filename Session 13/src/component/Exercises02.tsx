import { Component } from 'react'

interface UserInfor {
    id: number;
    name: string;
    date: string;
    address: string;
}

export default class Exercises02 extends Component <object, UserInfor> {
  constructor (props: object){
    super(props);
    this.state = {
        id: 1,
        name: "Nguyen Van Son",
        date: "20/12/2023",
        address: "Thnah Xuan, Ha Noi"
    }
  }  
  render() {
    return (
      <div>
        <h2>Thong tin ca nhan</h2>
        <p>id: {this.state.id}</p>
        <p>Ten: {this.state.name}</p>
        <p>Ngay sinh: {this.state.date}</p>
        <p>Dia chi: {this.state.address}</p>
      </div>
    )
  }
}
