import { Component } from 'react'
import Header from './Header'
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";
export default class AdminIndex extends Component {
  render() {
    return (
      <>
        <Header />
        <div style={{ display: "flex" }}>
          <Menu />
          <div
            style={{
              padding: "30px",
              width: "100%",
              backgroundColor: "#f3f4f6",
            }}
          >
            <Main />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}