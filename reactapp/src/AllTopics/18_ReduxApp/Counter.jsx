import { useSelector, useDispatch } from "react-redux";
import { incre, decre } from "./ReduxApp";

const Counter = () => {
  //! used to access redux's state value
  const count = useSelector((state) => {
    return state.counter; // {counter: 0}
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter Redux - App {count}</h1>
      <button className="bg-yellow-400" onClick={() => dispatch(incre())}>
        Increment
      </button>

      <button className="bg-red-400" onClick={() => dispatch(decre())}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
