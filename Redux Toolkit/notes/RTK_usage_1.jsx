//? usage is exactly same as the normal reducer
//? usage is exactly same as the normal reducer
//? usage is exactly same as the normal reducer
//? usage is exactly same as the normal reducer


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice"; //! these are action-object-creator-functions that return action-object
import { selectCount } from "./counterSelectors";

export default function CounterSimple() {
  const dispatch = useDispatch();
  
  // ✅ use selector function from createSelector
  const count = useSelector(selectCount);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+ Add</button>
      <button onClick={() => dispatch(decrement())}>- Subtract</button>
    </div>
  );
}

//! so increment() or decrement() are the action-object-creator-functions that return the action-object
//! and this action object is then dispatched to the reducer via useDispatch() and dispatch()