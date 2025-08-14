import { createSlice } from '@reduxjs/toolkit'; 
// ✅ Import createSlice from Redux Toolkit. 
// createSlice helps us make a reducer + types + action-object-creators in one place.

// Step 1: Initial state of the slice
const INITIAL_STATE = {
  currentUser: null, 
  // ✅ Start with no user logged in. Later this will store the user object after login.
};

// Step 2: Create the slice
export const userSlice = createSlice({
  name: 'user', 
  // ✅ Name of the slice. This is used internally for action type strings like 'user/setCurrentUser'.

  initialState: INITIAL_STATE, 
  // ✅ Set the starting state for this slice.

  reducers: {
    setCurrentUser(state, action) {
      // ✅ Reducer function to update currentUser
      // state → current state of this slice
      // action → object dispatched with type + payload

      state.currentUser = action.payload; 
      // ✅ Update currentUser with data from action.payload
      // In RTK, we can "mutate" state directly because it uses Immer internally.
    },
  },
});

//! Step 3: Export the auto-generated action-object-creator-function
export const { setCurrentUser } = userSlice.actions; 
// ✅ setCurrentUser(payload) returns an action object { type: 'user/setCurrentUser', payload }
// ✅ We will use this in components like: dispatch(setCurrentUser(user))

// Step 4: Export the reducer
export const userReducer = userSlice.reducer; 
// ✅ This reducer is added to the store. Redux will call it whenever an action for this slice is dispatched.

