//! Each selector function usually returns one of the variables in the global state object.
//! Each selector function usually returns one of the variables in the global state object.
//! Each selector function usually returns one of the variables in the global state object.

//importing the createSelector function
import { createSelector } from 'reselect';

//this is the simple base selector, that takes in state as input and returns one of the state vars
//format is we call the item through state and then reducer also, coz we merged all reducers into one
//in the root reducer, and we get single global state by doing so
const selectItems = (state) => state.basket.items;


//simple createSelector function, 
// that takes in the base selector as input and returns a new selector which is memoized
// which means the selector function will only run if the input changes or else no
export const selectTotalPrice = createSelector(
  [selectItems],
  (items) => items.reduce((total, item) => total + item.price * item.quantity, 0)
);


//! this is how the state looks for this selector, also we are importing coz, 
//! when we use createSelector, we need to pass in the state as input
// const state = {
//     basket: {
//       items: [
//         { id: 1, name: 'Apple', price: 1, quantity: 3 },
//         { id: 2, name: 'Banana', price: 2, quantity: 1 },
//       ],
//     }
//   }
  