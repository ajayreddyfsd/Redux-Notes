// Step 1: Import createSlice from Redux Toolkit
// This helper will make action types, action object creators, and reducer for us
//! so all three in one slice and we write selectors seperately
import { createSlice } from "@reduxjs/toolkit";


// Step 2: Create the slice — a slice = (name + initialState + reducers)
const counterSlice = createSlice({
  // Name of this slice — will be used in auto-generated action types, like counter/increment, counter/decrement
  name: "counter",

  // Initial state — starting value for our data
  initialState: { count: 0 },

  // Reducers — functions that change state
  // Here, we can "mutate" state directly (RTK will fix immutability for us)
  //! same earlier switch-case statement, but now as functions inside
  //! also we are manipulating the state variables directly. Unlike earlier case, where we used to spread and add new variables inside {}
  reducers: {
    increment(state) {
      // Add 1 to count
      state.count += 1;
    },
    decrement(state) {
      // Subtract 1 from count
      state.count -= 1;
    }
  }
});

// Step 3: Export the auto-generated action creators
// These functions can be dispatched directly in our components
//! these are the auto-generated action-object-creator-functions which we need to export
export const { increment, decrement } = counterSlice.actions;

// Step 4: Export the reducer function
// This will be given to the Redux store so it knows how to change state
export default counterSlice.reducer;


//! important! combine all the reducers in root-reducer 
//! and 
//! give it to the store as well.