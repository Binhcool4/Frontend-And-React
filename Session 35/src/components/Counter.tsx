import { useAppDispatch, useAppSelector } from "../hooks/CustomHooks";
import { increment, decrement, reset } from "../slices/counterSlice";
import type { RootState } from "../stores";

const Counter = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Giá trị hiện tại: {count}</p>

      <button onClick={() => dispatch(increment())}>
        + Tăng
      </button>
      <button onClick={() => dispatch(decrement())}>
        - Giảm
      </button>
      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
