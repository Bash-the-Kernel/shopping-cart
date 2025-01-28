import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <Helmet>
        <title>Your Cart - Our Shop</title>
        <meta name="description" content="View the items in your cart. Proceed to checkout or continue shopping." />
      </Helmet>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Cart;
