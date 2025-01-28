import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home - Our Shop</title>
        <meta name="description" content="Welcome to Our Shop! Explore the best products at amazing prices." />
      </Helmet>
      <h1 className="home-title">Welcome to Our Shop!</h1>
      <p>Explore the best products available at amazing prices.</p>
    </div>
  );
};

export default Home;
