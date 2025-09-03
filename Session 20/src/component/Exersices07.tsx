import { useReducer } from 'react'

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}
export default function Exersices07() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>
        Số đếm: {count}
      </h1>
      <div>
        <button style={{margin:10, border:"1px solid gray"}} onClick={() => dispatch({ type: "increment" })}> Tăng </button>
        <button style={{margin:10, border:"1px solid gray"}} onClick={() => dispatch({ type: "decrement" })}> Giảm </button>
      </div>
    </div>
  );
}
