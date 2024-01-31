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
    await fetch("http://localhost:4000/checkout", {
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
    <div>
      <h1>Shopping Cart</h1>
      {productsCount > 0 ? (
        <>
          {cart.items.map((currentProduct, idx) => (
            <CartProduct
              key={idx}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
            ></CartProduct>
          ))}

          <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

          <button onClick={() => checkout()}>Continue to checkout</button>
        </>
      ) : (
        <h1>Your cart is currently empty!</h1>
      )}
    </div>
  );
};

export default ModalContent;
