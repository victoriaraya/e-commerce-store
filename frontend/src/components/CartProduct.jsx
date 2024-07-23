import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { getProductData } from "../../../backend/src/storeProducts";
import images from "../productImages";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  const [amount, setAmount] = useState(0);

  // reg ex to trim inner white space, 'Keyboard Piano' would be 'keyboardpiano'
  let productNameForImgTag = productData.name.replace(/\s+/g, "").toLowerCase();

  return (
    <>
      <div className="cart-product">
        <img
          className="cart-product-image"
          src={images[productNameForImgTag]}
          alt={productData.name}
        />

        <h3 className="cart-product-name">{productData.name}</h3>
        <p className="cart-product-price">${productData.price}</p>
        <div className="cart-product-buttons cart-product-buttons-styling">
          <button
            className="cart-product-plus"
            onClick={() => cart.addOneToCart(id)}
          >
            +
          </button>
          <div className="cart-product-quantity">{quantity}</div>
          <button
            className="cart-product-minus"
            onClick={() => (quantity > 1 ? cart.removeOneFromCart(id) : null)}
          >
            -
          </button>
          <button
            className="cart-product-remove"
            onClick={() => cart.deleteFromCart(id)}
          >
            Remove
          </button>
        </div>
        <hr className="cart-product-divider" />
      </div>
    </>
  );
};

export default CartProduct;
