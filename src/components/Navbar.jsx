import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <Link to="/" aria-label="Home">Home</Link>
      <Link to="/shop" aria-label="Shop">Shop</Link>
      <div>
        <span>Cart: {cartCount} items</span>
        <Link to="/cart" aria-label="cart">Checkout</Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;