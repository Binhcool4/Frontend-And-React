import { Component } from "react";

export default class Exersices03 extends Component {
  render() {
    return (
      <div style={{backgroundColor:'black', display:'flex', gap:10,padding:30, alignItems:'center'}}>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: 8,
          }}
        >
          Primary
        </button>
        <button
          style={{
            backgroundColor: "gray",
            color: "white",
            borderRadius: 8,
          }}
        >
          Secondary
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: 8,
          }}
        >
          Success
        </button>
        <button
          style={{
            backgroundColor: "rgba(209,157,5,1)",
            color: "black",
            borderRadius: 8,
          }}
        >
          Warning
        </button>
        <button
        style={{
             backgroundColor: "rgba(220,53,69,1)", 
             color: "white", 
             borderRadius: 8
             }}
        >Danger</button>
        <button
        style={{
             backgroundColor: "rgba(13,202,240,1)", 
             color: "black", 
             borderRadius: 8
             }}
        >Infor</button>
        <button>Light</button>
        <button
        style={{
             backgroundColor: "black", 
             color: "white", 
             borderRadius: 8
             }}
        >Dark</button>
        <a style={{textDecoration: "underline"}} href="#">Link</a>
      </div>
    );
  }
}