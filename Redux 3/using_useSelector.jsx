import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

//cartItem is an object with 4 KV pairs
//name, image, price and quantity
//! we use this component inside checkout route to dispplay each checkout-item
const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  //! why useSelector? in first place, 
  //! why cant we just directly use the value returned by selector function?
  //! answer is explained below
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => dispatch(addItemToCart(cartItems, cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItems, cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

//! so we are importing the selector function which returns the value we need
// which is then fed to useSelector, and we are using the value in the component through useSelector
// why we need useSelector in the middle, why can't we just use the value returned by the selector function directly?
// coz there are some things happening BTS, we need to take it through useSelector
