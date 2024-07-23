import sunsetImage from "/images/sunset.png";

const SignOut = () => {
  return (
    <div className="sign-out-page">
      <img className="sign-out-image" src={sunsetImage} alt="sunset" />
      <h1 className="sign-out-text">You have been successfully signed out!</h1>
      <h1 className="sign-out-sub-text">💖</h1>
    </div>
  );
};

export default SignOut;
