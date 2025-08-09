// CounterLocal.jsx
import { useState } from "react";

const CounterLocal = () => {
  const [count, setCount] = useState(0); // local state

  return (
    <div>
      <h2>Local Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default CounterLocal;
