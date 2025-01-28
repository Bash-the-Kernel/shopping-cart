import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

Shop.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Shop;