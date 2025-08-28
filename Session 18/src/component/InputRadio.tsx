import { useReducer } from "react";
interface State {
  gender: string;
}
interface Action {
  type: "select";
  payload: string;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "select":
      return { ...state, gender: action.payload };
    default:
      return state;
  }
};
function InputRadio() {
  const [state, dispatch] = useReducer(reducer, { gender: "Nam" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "select", payload: e.target.value });
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Nam"
            checked={state.gender === "Nam"}
            onChange={handleChange}
          />
          Nam
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Nữ"
            checked={state.gender === "Nữ"}
            onChange={handleChange}
          />
          Nữ
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="🏳️‍🌈?"
            checked={state.gender === "Khác"}
            onChange={handleChange}
          />
          Khác
        </label>
        <br />
      </div>

      <p>
        Selected gender: {state.gender}
      </p>
    </div>
  );
}

export default InputRadio;