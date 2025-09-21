import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";

const ChangeState = () => {
  const company = useSelector((state: RootState) => state.company);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: "CHANGE_COMPANY", payload: "RikkeiSoft" });
  };

  return (
    <div>
      <h1>{company}</h1>
      <button onClick={handleChange}>Change state</button>
    </div>
  );
};

export default ChangeState;
