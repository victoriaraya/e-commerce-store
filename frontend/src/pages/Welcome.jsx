import { Link } from "react-router-dom";
import welcomeImage from "/images/welcome.png";
import soundBowlImage from "/images/soundbowl.jpg";
import mirrorImage from "/images/fulllengthmirror.jpg";
import pianoImage from "/images/keyboardpiano.jpg";

const Welcome = () => {
  return (
    <div className="welcome">
      <img className="welcome-image" src={welcomeImage} alt="welcome" />
      <h2 className="shop-products">Shop our products ✨</h2>
      <section className="welcome-products">
        <Link to="/wellness">
          <section className="welcome-product">
            <img
              className="product-image"
              src={soundBowlImage}
              alt="sound bowl"
            />
            <h2>Wellness</h2>
          </section>
        </Link>
        <Link to="/home">
          <section className="welcome-product">
            <img className="product-image" src={mirrorImage} alt="mirror" />
            <h2>Home</h2>
          </section>
        </Link>
        <Link to="/hobbies">
          <section className="welcome-product">
            <img
              className="product-image"
              src={pianoImage}
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
