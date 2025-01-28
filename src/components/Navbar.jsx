import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <div>
        <span>Cart: {cartCount} items</span>
        <Link to="/cart">Checkout</Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;