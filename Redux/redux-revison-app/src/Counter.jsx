import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './redux/Slices/Counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter {count}</h2>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
    </>
  );
};

export default Counter;
