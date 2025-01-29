import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

// Lazy imports for components
const ScrollingBanner = React.lazy(() => import("./components/ScrollingBanner"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Home = React.lazy(() => import("./pages/Home"));
const Shop = React.lazy(() => import("./pages/Shop"));
const Cart = React.lazy(() => import("./pages/Cart"));
const WorldClock = React.lazy(() => import("./components/WorldClock"));

const App = () => {
  const [cart, setCart] = useState([]); // State to manage the cart

  // Calculate the total number of items in the cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar cartCount={cartCount} />
          <ScrollingBanner/>
          <WorldClock/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
};

export default App;