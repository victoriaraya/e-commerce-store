import sunsetImage from "/images/sunset.png";

const Cancel = () => {
  return (
    <div className="cancel-page">
      <img className="cancel-image" src={sunsetImage} alt="sunset" />
      <h1 className="not-complete">Your order was not completed!</h1>
      <h1 className="cancel-heart">💖</h1>
    </div>
  );
};

export default Cancel;
