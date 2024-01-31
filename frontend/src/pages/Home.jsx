import { productsArray } from "../../../backend/src/storeProducts";
import ProductTile from "../components/ProductTile";

const Home = () => {
  let newProductsArray = productsArray.slice(3, 6);

  return (
    <div className="home-page">
      <div className="page-titles">
        <span>HOME</span>
      </div>
      <div className="products">
        {newProductsArray.map((product, idx) => (
          <ProductTile product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Home;
