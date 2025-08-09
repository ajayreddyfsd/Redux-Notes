//! each action function, returns an action object, the action object for the reducer
//! and each action object has two key-value pairs. the action-type and the payload


// cart.actions.jsx
// This shows both the manual and createAction versions of Redux action creators

import { createAction } from '@reduxjs/toolkit';

// -------------------------------------
// ACTION TYPES (can be in a separate file)
export const CART_ACTION_TYPES = {
  ADD_ITEM: 'cart/ADD_ITEM',
  REMOVE_ITEM: 'cart/REMOVE_ITEM',
  CLEAR_CART: 'cart/CLEAR_CART',
};

// -------------------------------------
// ✅ METHOD 1: MANUAL ACTION CREATORS

export const addItemManual = (item) => ({
  type: CART_ACTION_TYPES.ADD_ITEM,
  payload: item,
});

export const removeItemManual = (item) => ({
  type: CART_ACTION_TYPES.REMOVE_ITEM,
  payload: item,
});

export const clearCartManual = () => ({
  type: CART_ACTION_TYPES.CLEAR_CART,
});

// -------------------------------------
// ✅ METHOD 2: createAction VERSION

export const addItem = createAction(CART_ACTION_TYPES.ADD_ITEM);
export const removeItem = createAction(CART_ACTION_TYPES.REMOVE_ITEM);
export const clearCart = createAction(CART_ACTION_TYPES.CLEAR_CART);

// -------------------------------------
// ✅ EXAMPLE USAGE:

// Simulate calling the action creators
const sampleItem = { id: 1, name: 'Shoe', price: 100 };

// Manual version output:
console.log(addItemManual(sampleItem));
/*
{
  type: 'cart/ADD_ITEM',
  payload: { id: 1, name: 'Shoe', price: 100 }
}
*/

// createAction version output:
console.log(addItem(sampleItem));
/*
{
  type: 'cart/ADD_ITEM',
  payload: { id: 1, name: 'Shoe', price: 100 }
}
*/


//! usage is exactly the same as the manual version
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  return <button onClick={addToCart}>Add to Cart</button>;
};
