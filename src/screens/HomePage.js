import products from "../data";
import "./HomePage.css";
import ProductCard from "../components/productCard/ProductCard";

const HomePage = () => {
  return (
    <div className="products__wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
