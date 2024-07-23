import sunsetImage from "/images/sunset.png";

const Success = () => {
  return (
    <div className="success-page">
      <img className="success-image" src={sunsetImage} alt="sunset" />
      <h1 className="thank-you">Thank you for your order!</h1>
      <h1 className="success-heart">💖</h1>
    </div>
  );
};

export default Success;
