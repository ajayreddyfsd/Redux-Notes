import { createSlice } from '@reduxjs/toolkit'; 
// ✅ Import createSlice from Redux Toolkit
// createSlice helps us make a reducer + types + action-object-creators in one place.

// Step 1: Initial state for this slice
export const CATEGORIES_INITIAL_STATE = {
  categories: [], 
  // ✅ Start with an empty array of categories
  // Later we will fill this array with category objects fetched from a server
};

// Step 2: Create the slice
export const categoriesSlice = createSlice({
  name: 'categories', 
  // ✅ Name of this slice. Used to generate action type strings like 'categories/setCategories'

  initialState: CATEGORIES_INITIAL_STATE, 
  // ✅ Starting state for this slice

  reducers: {
    setCategories(state, action) {
      // ✅ Reducer function to update categories array
      // state → current slice state
      // action → dispatched action object with type + payload

      state.categories = action.payload; 
      // ✅ Replace the old categories array with new data from action.payload
      // RTK uses Immer internally, so we can "mutate" state safely
    },
  },
});

//! Step 3: Export the auto-generated action-object-creator-function
export const { setCategories } = categoriesSlice.actions; 
// ✅ setCategories(payload) returns an action object { type: 'categories/setCategories', payload }
// ✅ We will use this in components like: dispatch(setCategories(newCategories))

// Step 4: Export the reducer
export const categoriesReducer = categoriesSlice.reducer; 
// ✅ Add this to the Redux store so Redux knows how to update categories state
