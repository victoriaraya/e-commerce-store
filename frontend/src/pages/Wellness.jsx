import { productsArray } from "../../../backend/src/storeProducts";
import ProductTile from "../components/ProductTile";

const Wellness = () => {
  let newProductsArray = productsArray.slice(0, 3);

  return (
    <div className="wellness-page">
      <div className="page-titles">
        <span>WELLNESS</span>
      </div>
      <div className="products">
        {newProductsArray.map((product, idx) => (
          <ProductTile product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Wellness;
