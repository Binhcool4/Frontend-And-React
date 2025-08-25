import { Component } from 'react'

export default class Pagination extends Component {
  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
          <button
            style={{
              padding: "5px 10px",
              border: "1px solid #ddd",
              borderRadius: 5,
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            &lt;
          </button>
          <button
            style={{
              padding: "5px 10px",
              border: "1px solid #ddd",
              borderRadius: 5,
              backgroundColor: "#1DA1F2",
              color: "white",
              cursor: "pointer",
            }}
          >
            1
          </button>
          <button
            style={{
              padding: "5px 10px",
              border: "1px solid #ddd",
              borderRadius: 5,
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            2
          </button>
          <button
            style={{
              padding: "5px 10px",
              border: "1px solid #ddd",
              borderRadius: 5,
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            3
          </button>
          <button
            style={{
              padding: "5px 10px",
              border: "1px solid #ddd",
              borderRadius: 5,
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            4
          </button>
          <button
            style={{
              padding: "5px 10px",
              border: "1px solid #ddd",
              borderRadius: 5,
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            &gt;
          </button>
        </div>
      </>
    );
  }
}