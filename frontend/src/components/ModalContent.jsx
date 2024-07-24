import Modal from "./Modal";
import { CartContext } from "../contexts/CartContext";
import CartProduct from "./CartProduct";
import { useState, useContext } from "react";

const ModalContent = () => {
  const cart = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const checkout = async () => {
    await fetch("api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.url) {
          window.location.assign(res.url);
        }
      });
  };

  return (
    <div className="cart-content-inner">
      <h1 className="cart-title">Shopping Cart</h1>
      <hr className="cart-title-divider" />
      {productsCount > 0 ? (
        <>
          {cart.items.map((currentProduct, idx) => (
            <CartProduct
              key={idx}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
            ></CartProduct>
          ))}
          <div className="cart-bottom">
            <hr className="cart-divider-total" />
            <div className="cart-total">
              <h1 className="cart-total-1">Total</h1>
              <h1 className="cart-total-2">
                ${cart.getTotalCost().toFixed(2)}
              </h1>
            </div>
            <button className="checkout-button" onClick={() => checkout()}>
              Continue to checkout
            </button>
          </div>
        </>
      ) : (
        <h1 className="empty-cart">Your cart is currently empty!</h1>
      )}
    </div>
  );
};

export default ModalContent;
