import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Tăng</button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={{ marginLeft: 8 }}
      >
        Giảm
      </button>
    </div>
  );
};

export default Counter;
