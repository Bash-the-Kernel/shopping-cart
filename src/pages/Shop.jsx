import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    import("axios").then((axios) =>
      axios.default
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
          setError("Failed to load products. Please try again.");
          setLoading(false);
        })
    );
  }, []);

  return (
    <main className="shop">
      <Helmet>
        <title>Shop - Our Products</title>
        <meta name="description" content="Discover our wide range of products available for purchase. Shop now!" />
      </Helmet>
      <h1>Shop</h1>
      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
};

Shop.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Shop;
