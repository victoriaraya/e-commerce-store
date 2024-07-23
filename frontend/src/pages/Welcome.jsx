import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <img className="welcome-image" src="/welcome.png" alt="welcome" />
      <h2 className="shop-products">Shop our products ✨</h2>
      <section className="welcome-products">
        <Link to="/wellness">
          <section className="welcome-product">
            <img
              className="product-image"
              src="../images/soundbowl.jpg"
              alt="sound bowl"
            />
            <h2>Wellness</h2>
          </section>
        </Link>
        <Link to="/home">
          <section className="welcome-product">
            <img
              className="product-image"
              src="../images/fulllengthmirror.jpg"
              alt="mirror"
            />
            <h2>Home</h2>
          </section>
        </Link>
        <Link to="/hobbies">
          <section className="welcome-product">
            <img
              className="product-image"
              src="../images/keyboardpiano.jpg"
              alt="keyboard piano"
            />
            <h2>Hobbies</h2>
          </section>
        </Link>
      </section>
    </div>
  );
};

export default Welcome;
