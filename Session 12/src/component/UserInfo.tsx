import { Component } from 'react'

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <h3>Thong tin ca nhan</h3>
        <ul>
            <li>Ho va ten: <b>Nguyen Van A</b></li>
            <li>Gioi tinh: <b>Nam</b></li>
            <li>Ngay sinh: <b>06/03/2024</b></li>
            <li>Email: <b>nva@gmail.com</b></li>
            <li>Dia chi: <b>Thanh Xuan, Ha Noi</b></li>
        </ul>
      </div>
    )
  }
}
