// App.jsx
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';

import { increment, decrement } from './redux/counter/actions';
import { selectCount } from './redux/counter/selectors';

// ✅ This is the component that will read from Redux and dispatch actions
const Counter = () => {
  // useSelector gives us access to state
  const count = useSelector(selectCount); // same as: state.counter.count

  // useDispatch gives us the dispatch function
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h2>Redux Counter</h2>
      <p>Count: {count}</p>

      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
    </div>
  );
};


// ✅ Wrap the app.js with <Provider store={store}>
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
