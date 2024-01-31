import { productsArray } from "../../../backend/src/storeProducts";
import ProductTile from "../components/ProductTile";

const Hobbies = () => {
  let newProductsArray = productsArray.slice(6, 9);

  return (
    <div className="hobbies-page">
      <div className="page-titles">
        <span>HOBBIES</span>
      </div>
      <div className="products">
        {newProductsArray.map((product, idx) => (
          <ProductTile product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
