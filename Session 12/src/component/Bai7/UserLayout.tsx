import { Component } from 'react'
import Article from "./Article";
import Cart from "./Cart";
import Header from "./Header";
import Menu from "./Menu";
import Navbar from "./Navbar";
export default class UserLayout extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header />
        <Navbar />
        <div style={{ display: "flex", flex: "1" }}>
          <Menu/>
          <div style={{display: "grid",gridTemplateColumns: "repeat(4, 1fr)",flex: 1,background: "#ffe4e1",gap: 10,padding: 10,}}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </div>
            <Article/>
        </div>
      </div>
    );
  }
}