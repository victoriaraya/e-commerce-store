import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import { Link } from "react-router-dom";

const ProductTile = (props) => {
  const product = props.product;

  // reg ex to trim inner white space, 'Keyboard Piano' would be 'keyboardpiano'
  let productNameForImgTag = product.name.replace(/\s+/g, "").toLowerCase();

  const cart = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    cart.addOneToCart(product.id);
    setShowModal(true);
  }

  return (
    <div className="product-tile">
      <div className="product-tile-hover">
        <Link to={`/details/${product.id}`}>
          <img
            className="product-image"
            src={`../images/${productNameForImgTag}.jpg`}
            alt={product.name}
          />
          <div className="learn-more">Learn more</div>
          <h1>{product.name}</h1>
          <h2>${product.price}</h2>
        </Link>
      </div>
      <button className="add-to-cart-button" onClick={handleClick}>
        Add to Cart
      </button>
      {showModal ? (
        <>
          <Modal>
            <ModalContent />
            <div className="close-button">
              <button onClick={() => setShowModal(false)}>X</button>
            </div>
          </Modal>
        </>
      ) : null}
    </div>
  );
};

export default ProductTile;
