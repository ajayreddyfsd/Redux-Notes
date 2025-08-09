//! each action function, returns an action object, the action object for the reducer
//! and each action object has two key-value pairs. the action-type and the payload
  
  
  //! step 1
export const CART_ACTION_TYPES = {
    ADD_ITEM: 'cart/ADD_ITEM',
    REMOVE_ITEM: 'cart/REMOVE_ITEM',
    CLEAR_CART: 'cart/CLEAR_CART',
  };

  
  //! step 2
  import { CART_ACTION_TYPES } from './cart.types';

  export const addItemToCart = (item) => ({
    type: CART_ACTION_TYPES.ADD_ITEM,
    payload: item,
  });
  
  export const removeItemFromCart = (item) => ({
    type: CART_ACTION_TYPES.REMOVE_ITEM,
    payload: item,
  });
  
  export const clearCart = () => ({
    type: CART_ACTION_TYPES.CLEAR_CART,
  });
  


//! step 3
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  return <button onClick={addToCart}>Add to Cart</button>;
};
