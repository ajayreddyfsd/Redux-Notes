import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

//this component helps in displaying each product in the shop route
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{"$" + price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => dispatch(addItemToCart(cartItems, product))} //! watch below comment
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;

//! so we are imporitng the action-creator function which returns the action object
//! this action object is then fed to dispatch, 
//! and dispatch then dispatches the action object to the reducer, 
//! then reducer takes it from there and updates the state
