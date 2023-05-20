import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  incrementByValue,
} from "../redux/actions/counterActions";


export default function Counter() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    incrementAction(dispatch);
  };
  const handleDecrement = () => {
    decrementAction(dispatch);
  };

  const handleIncByValue = (vl) => {
    incrementByValue(vl, dispatch);
  };

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => handleIncByValue(3)}>Increment 3</button>
      </div>
    </>
  );
}
