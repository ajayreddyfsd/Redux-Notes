// src/
// │
// ├── redux/
// │   └── counter/
// │       ├── types.js
// │       ├── actions.js
// │       ├── reducer.js
// │       ├── selectors.js
// │
// ├── redux/
// │   └── rootReducer.js
// │
// ├── store.js
// ├── App.jsx


//! redux file no. 1
//! redux/counter/types.js
// These are constants to avoid typos in action names
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


//! redux file no. 2
//! redux/counter/actions.js
import { INCREMENT, DECREMENT } from './types';

// These functions return "action objects"
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });


//! redux file no. 3
//! redux/counter/reducer.js
import { INCREMENT, DECREMENT } from './types';

const initialState = {
  count: 0
};

// Just like useReducer in React, this handles state logic
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;



//! redux file no. 4
//! redux/counter/selectors.js

// A selector is a function that takes Redux state and returns specific data.
// Instead of writing state.counter.count everywhere, we write this once.
export const selectCount = (state) => state.counter.count;











