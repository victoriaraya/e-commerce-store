import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { getProductData } from "../../../backend/src/storeProducts";
import Modal from "../components/Modal";
import ModalContent from "../components/ModalContent";

const Details = () => {
  const { id } = useParams();
  const product = getProductData(id);
  const cart = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(1);

  function handleClick(amount) {
    cart.addManyToCart(id, amount);
    setShowModal(true);
  }

  // reg ex to trim inner white space, 'Keyboard Piano' would be 'keyboardpiano'
  let productNameForImgTag = product.name.replace(/\s+/g, "").toLowerCase();

  return (
    <div className="details-content">
      <h1 className="details-title">{product.name}</h1>
      <h2 className="details-price">${product.price}</h2>
      <div className="details-description">
        <p>✨✨✨</p>
        <p>{product.description}</p>
        <p>✨✨✨</p>
      </div>
      <img
        className="details-image"
        src={`../images/${productNameForImgTag}.jpg`}
        alt={product.name}
      />
      <div className="details-cart details-cart-styling">
        <button className="details-plus" onClick={() => setAmount(amount + 1)}>
          +
        </button>
        <div className="details-amount">
          <p>{amount}</p>
        </div>
        <button
          className="details-minus"
          onClick={() => (amount > 1 ? setAmount(amount - 1) : setAmount(1))}
        >
          ⎼
        </button>
        <button
          className="details-add-to-cart-button"
          onClick={() => handleClick(amount)}
        >
          Add to Cart
        </button>
        {showModal ? (
          <>
            <Modal>
              <ModalContent />
              <div>
                <button
                  className="close-button"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
              </div>
            </Modal>
          </>
        ) : null}
      </div>
      <button className="details-go-back">
        <Link to={`/${product.category}`}>← Go back</Link>
      </button>
    </div>
  );
};

export default Details;
