import { useAppDispatch, useAppSelector } from "../hooks/CustomHooks";
import {
  generateRandomNumbers,
} from "../slices/randomNumberSlice";
import type { RootState } from "../stores";

const RandomNumber = () => {
  const numbers = useAppSelector(
    (state: RootState) => state.randomNumber.numbers
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <span style={{ fontSize: "18px" }}>[{numbers.join(", ")}]</span>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => dispatch(generateRandomNumbers())}>
          Random number
        </button>
      </div>
    </div>
  );
};

export default RandomNumber;
