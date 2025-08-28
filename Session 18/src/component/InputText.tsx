import { useReducer } from "react";
interface State {
  text: string;
}

interface Action {
  type: "change";
  payload: string;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "change":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const InputText: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { text: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "change", payload: e.target.value });
  };

  return (
    <div>
      <h2>{state.text}</h2>
      <input
        type="text"
        value={state.text}
        onChange={handleChange}
        placeholder="Input"
        style={{ padding: "5px 10px",}}
      />
    </div>
  );
};

export default InputText;