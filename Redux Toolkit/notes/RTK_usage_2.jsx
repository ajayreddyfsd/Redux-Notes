//? usage is exactly same as the normal reducer
//? usage is exactly same as the normal reducer
//? usage is exactly same as the normal reducer
//? usage is exactly same as the normal reducer

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice"; //! these are action-object-creator-functions that return action-object
import { selectCount, selectIsEven } from "./counterSelectors";

export default function CounterAdvanced() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);    // use selector
  const isEven = useSelector(selectIsEven);  // derived selector

  const [step, setStep] = useState(1);

  return (
    <div>
      <h2>Count: {count} ({isEven ? "Even" : "Odd"})</h2>

      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <button onClick={() => { for(let i=0;i<step;i++) dispatch(increment()) }}>
        + Add {step}
      </button>
      <button onClick={() => { for(let i=0;i<step;i++) dispatch(decrement()) }}>
        - Subtract {step}
      </button>

      {count >= 10 && <p style={{color: "green"}}>🎉 Count is 10 or more!</p>}
    </div>
  );
}


//! so increment() or decrement() are the action-object-creator-functions that return the action-object
//! and this action object is then dispatched to the reducer via useDispatch() and dispatch()