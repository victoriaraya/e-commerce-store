import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Modal from "./Modal";
import { CartContext } from "../contexts/CartContext";
import ModalContent from "./ModalContent";
import { useSignIn } from "../contexts/SignInContext";

const NavBar = () => {
  const cart = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const { isUserSignedIn } = useSignIn();
  const { updateSignInStatus } = useSignIn();

  const handleSignOut = () => {
    localStorage.clear();
    updateSignInStatus(false);
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <ul className="nav-bar">
      <li className="dropdown">
        <div className="nav-item dropdown-title">Shop </div>
        <ul className="dropdown-content">
          <li className="nav-item">
            <Link to="/wellness">Wellness</Link>
          </li>
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/hobbies">Hobbies</Link>
          </li>
        </ul>
      </li>
      {isUserSignedIn ? (
        <Link to="/sign-out">
          <li
            id="sign-out"
            className="nav-item sign-out"
            onClick={handleSignOut}
          >
            Sign out
          </li>
        </Link>
      ) : (
        <Link to="/sign-in">
          <li id="sign-in" className="nav-item sign-in">
            Sign in
          </li>
        </Link>
      )}
      <li>
        <button
          className="nav-item cart-button"
          onClick={() => setShowModal(true)}
        >
          <i className="fa-solid fa-cart-shopping fa-2xl"></i>
          <span> {productsCount}</span>
        </button>
        {showModal ? (
          <>
            <Modal>
              <button
                className="cart-close-button"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <ModalContent />
            </Modal>
          </>
        ) : null}
      </li>
    </ul>
  );
};

export default NavBar;
