import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, incrementByAmount } from "../redux/counterSlice";


export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement())
  };

  const handleIncByValue = (vl) => {
    dispatch(incrementByAmount(vl));
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
