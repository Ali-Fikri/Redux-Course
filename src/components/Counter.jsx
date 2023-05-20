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
    dispatch(incrementAction());
  };
  const handleDecrement = () => {
    dispatch(decrementAction());
  };

  const handleIncByValue = (vl) => {
    dispatch(incrementByValue(vl));
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
