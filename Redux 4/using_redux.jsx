// CounterRedux.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// ----------------------
// 1. Action Types
// ----------------------
const COUNTER_ACTION_TYPES = {
  SET_COUNT: "counter/SET_COUNT",
};

// ----------------------
// 2. Action Creator
// ----------------------
// This function creates the action object that we dispatch
const setCount = (value) => ({
  type: COUNTER_ACTION_TYPES.SET_COUNT,
  payload: value,
});

// ----------------------
// 3. Reducer
// ----------------------
// Reducers handle dispatched actions and return the new state
const INITIAL_STATE = {
  count: 0,
};

const counterReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case COUNTER_ACTION_TYPES.SET_COUNT:
      return { ...state, count: payload };
    default:
      return state;
  }
};

// ----------------------
// 4. Store
// ----------------------
// Root reducer in case you add more slices later
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Create Redux store
const store = createStore(rootReducer);

// ----------------------
// 5. React Component
// ----------------------
const CounterRedux = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount); // access Redux state

  const handleIncrement = () => {
    dispatch(setCount(count + 1)); // dispatch action to increase count
  };

  const handleDecrement = () => {
    dispatch(setCount(count - 1)); // dispatch action to decrease count
  };

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "2rem" }}>
      <h2>Redux Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>- Decrement</button>
      <button onClick={handleIncrement} style={{ marginLeft: "1rem" }}>
        + Increment
      </button>
    </div>
  );
};

// ----------------------
// 6. App Wrapper with Provider
// ----------------------
const App = () => (
  <Provider store={store}>
    <CounterRedux />
  </Provider>
);

export default App;
