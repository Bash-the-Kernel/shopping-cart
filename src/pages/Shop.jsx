import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Shop = ({ cart, setCart }) => {
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

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <main className="shop">
      <Helmet>
        <title>Shop - Our Products</title>
        <meta
          name="description"
          content="Discover our wide range of products available for purchase. Shop now!"
        />
        {/* Preload the first product image */}
        {products.length > 0 && (
          <link rel="preload" href={products[0].image} as="image" />
        )}
      </Helmet>
      <h1>Shop</h1>
      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </main>
  );
};

Shop.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Shop;