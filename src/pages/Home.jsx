import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home - Our Shop</title>
        <meta name="description" content="Welcome to Our Shop! Explore the best products at amazing prices." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <h1 className="home-title">Welcome to Our Shop!</h1>
      <p>Explore the best products available at amazing prices.</p>

      {/* New Flexbox Sections */}
      <div className="home-flex-container">
        <div className="home-flex-item">
          <h2>Quality Products</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        </div>
        <div className="home-flex-item">
          <h2>Fast Delivery</h2>
          <p>Donec vel sapien id odio posuere bibendum. Integer aliquet, quam eget posuere facilisis.</p>
        </div>
        <div className="home-flex-item">
          <h2>Best Prices</h2>
          <p>Aliquam erat volutpat. Phasellus consequat libero ut velit fringilla, id tempus libero pulvinar.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
