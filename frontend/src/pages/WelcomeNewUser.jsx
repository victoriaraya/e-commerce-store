import { useState } from "react";
import { Link } from "react-router-dom";
import makeAuthenticatedRequest from "../../utils/makeAuthenticatedRequest";
import sunsetImage from "/images/sunset.png";

const WelcomeNewUser = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showDiscount, setShowDiscount] = useState(false);

  const handleClick = async () => {
    try {
      const url = `/api/discount/${localStorage.getItem("name")}`;
      const options = {
        method: "GET",
      };
      const response = await makeAuthenticatedRequest(url, options);

      if (response && response.ok) {
        setShowDiscount(true);
      } else {
        setErrorMessage("Must have an account to access discount!");
      }
    } catch (e) {
      console.error("Error during register:", e);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="welcome-new-page">
      <h1 className="welcome-new-title">
        Welcome to Victoria's shop
        {localStorage.getItem("name")
          ? `, ${localStorage.getItem("name")}`
          : null}
        !
      </h1>
      <h2 className="welcome-new-text">click here for your discount code ↓</h2>
      <button className="welcome-new-button" onClick={handleClick}>
        15% off 🥳
      </button>
      {errorMessage && (
        <p className="welcome-new-error-message">
          {errorMessage} Click{" "}
          <span className="click-here">
            <Link to="/sign-in">here</Link>
          </span>{" "}
          to sign in or make an account.
        </p>
      )}
      {showDiscount ? (
        <div className="welcome-new-discount-code">
          <h3>Your code is: LOVEYOU</h3>
          <p>Enter your code after you continue to checkout for 15% off 💖</p>
        </div>
      ) : null}
      <img className="welcome-new-image" src={sunsetImage} alt="sunset" />
    </div>
  );
};

export default WelcomeNewUser;
