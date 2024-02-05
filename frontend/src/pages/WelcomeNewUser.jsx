import { useNavigate } from "react-router-dom";

const WelcomeNewUser = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // give token so we can access the page
    // display error message if token not authorized like please login
    navigate("/discount");
  };

  return (
    <div className="welcome-new-page">
      <h1 className="welcome-new-title">Welcome to Victoria's shop!</h1>
      <h2 className="welcome-new-text">click here for your discount code ↓</h2>
      <button className="welcome-new-button" onClick={handleClick}>
        15% off 🥳
      </button>
      <img
        className="welcome-new-image"
        src="./images/sunset.png"
        alt="sunset"
      />
    </div>
  );
};

export default WelcomeNewUser;
