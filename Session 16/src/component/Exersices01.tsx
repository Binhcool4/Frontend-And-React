import { Component } from "react";

export default class Exersices01 extends Component {
  render() {
    const list: string[] = ["Toan", "Van", "Anh", "Hoa", "Sinh"];
    return (
      <div
        style={{
          width: 'fitContent',
          height: "fitContent",
          backgroundColor: "black",
          padding: 30,
        }}
      >
        <h2 style={{ color: "white" }}>Danh sach mon hoc</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {list.map((val, index) => {
            return (
              <div
                style={{
                  width: 400,
                  height: 50,
                  backgroundColor: "rgba(224,247,250,1)",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "rgba(16,99,166,1",
                }}
                key={index}
              >
                {val}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}