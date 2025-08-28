import { useReducer } from "react";
interface State {
  count: number;
}

type Action = { type: "INCREASE" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default function Increase() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{state.count}</h1>

      <button
        onClick={() => dispatch({ type: "INCREASE" })}
      >
        Increase
      </button>
    </div>
  );
}
