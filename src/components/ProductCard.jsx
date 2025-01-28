import PropTypes from "prop-types";
import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <div>
        <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>-</button>
        <input type="number" value={quantity} readOnly />
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;