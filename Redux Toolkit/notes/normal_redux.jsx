// Step 1: Action type names — these are just labels for our actions
// Later, we will use these strings to tell the reducer "what happened"
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Step 2: Action creators — small functions that return an "action object"
// An action object always has a 'type' (and sometimes 'payload')
// These functions will be called later when we want to change state
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// Step 3: Initial state — starting point of our data in Redux
// Here we start with count = 0
const INITIAL_STATE = { count: 0 };

// Step 4: Reducer function — decides how state changes based on action
// It takes the current state and the action, then returns the new state
export function counterReducer(state = INITIAL_STATE, action) {
  // Step 5: switch checks what action happened
  switch (action.type) {
    // If INCREMENT happened → increase count by 1
    case INCREMENT:
      // We use {...state} to copy the old state (immutable rule)
      return { ...state, count: state.count + 1 };

    // If DECREMENT happened → decrease count by 1
    case DECREMENT:
      return { ...state, count: state.count - 1 };

    // If no case matches → return the same state (no change)
    default:
      return state;
  }
}
