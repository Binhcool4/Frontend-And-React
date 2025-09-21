import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";

const RandomNumber = () => {
  const randomNumbers = useSelector((state: RootState) => state.randomNumbers);
  const dispatch = useDispatch();

  const handleGenerate = () => {
    const num = Math.floor(Math.random() * 100);
    dispatch({ type: "ADD_RANDOM_NUMBER", payload: num });
  };

  return (
    <div>
      <div style={{ fontSize: 24, marginBottom: 8 }}>
        [{randomNumbers.join(",")}]
      </div>
      <button onClick={handleGenerate}>Generate Random Number</button>
    </div>
  );
};

export default RandomNumber;
