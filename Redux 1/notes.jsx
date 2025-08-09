{/*
🧠 REDUX FLOW – SIMPLE EXPLANATION

🟩 1. What is Redux?
Redux is a global state manager — like a big version of context.
It lets you manage app-wide state in one place.
like context is a bucket. redux is a smart bucket.



🟩 2. What are the 4 main parts in Redux logic (per feature)?
Each feature (like counter, cart, etc.) usually has:

  ┌────────────┐
  │ types.js   │  ➜ Just strings used as action types (e.g., 'INCREMENT')
  ├────────────┤
  │ actions.js │  ➜ Functions that return action objects (e.g., { type: INCREMENT })
  ├────────────┤
  │ reducer.js │  ➜ A reducer function like in useReducer, that updates state
  └────────────┘
     ↓
  selectors.js ➜ Functions that extract state (e.g., selectCount)



🟩 3. What is combineReducers?

combineReducers merges all your feature reducers into one big reducer.

Example:
combineReducers({
  counter: counterReducer,
  cart: cartReducer
});

⬇ This creates a global state that looks like:

//! the counter and cart are individual reducers
state = {
  counter: { count: 0 },
  cart: { cartItems: [...] }
}



🟩 4. How do we create the Redux store?

We pass that combined reducer to createStore():

  const store = createStore(rootReducer);

This is like doing:
  const [state, dispatch] = useReducer(rootReducer, initialState)



🟩 5. How do we give Redux to our React app?

We wrap our app in a Provider:

  <Provider store={store}>
    <App />
  </Provider>


  
🟩 6. How do we access the Redux state inside a component?

✅ useSelector → like useContext → gives access to state
✅ useDispatch → like context actions → lets you dispatch actions

Example:

  const count = useSelector(selectCount);     // read from state
  const dispatch = useDispatch();             // send an action
  dispatch(increment());                      // send INCREMENT action

🟩 7. Why use selectors?

Selectors are small functions that extract specific pieces of state.
You can reuse them in many components instead of writing `state.counter.count` everywhere.

Example:

  export const selectCount = (state) => state.counter.count;

Then use it with:
  const count = useSelector(selectCount);

This keeps your component clean!

*/}
