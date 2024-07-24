import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "../contexts/SignInContext";
import sunsetImage from "/images/sunset.png";

const SignIn = () => {
  const [signInParams, setSignInParams] = useState({
    email: "",
    password: "",
  });
  const [controlShow, setControlShow] = useState({ active: "no" });
  const [errorMessage, setErrorMessage] = useState("");
  const { updateSignInStatus } = useSignIn();
  const navigate = useNavigate();

  const signInUser = async (signInParams) => {
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInParams),
      });

      if (!response.ok) {
        if (response.status === 401) {
          document.getElementById("password").value = "";
          setErrorMessage(
            errorMessage === "Incorrect password. Please try again."
              ? "Incorrect password. Please try again. "
              : "Incorrect password. Please try again."
          );
        } else if (response.status === 400) {
          document.getElementById("email").value = "";
          setErrorMessage(
            errorMessage === "Email not registered."
              ? "Email not registered. "
              : "Email not registered."
          );
        }
      } else {
        const data = await response.json();
        const token = data.token;
        let name = data.name;
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        updateSignInStatus(true);
        navigate("/welcome-back");
      }
    } catch (e) {
      console.error("Error during register:", e);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const togglePassword = () => {
    controlShow.active === "yes"
      ? setControlShow({ active: "no" })
      : setControlShow({ active: "yes" });
    const pass = document.getElementById("password");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  };

  const toggle =
    document.getElementById("password")?.value.length > 0 ? "visible" : "";

  const hidePassword =
    document.getElementById("password")?.value.length > 0 ? "hide" : "";

  const hideEmail =
    document.getElementById("email")?.value.length > 0 ? "hide" : "";

  return (
    <div className="sign-in-page">
      <img className="sign-in-image" src={sunsetImage} alt="sunset" />
      <h1 className="sign-in-title">Sign in</h1>
      <form
        className="sign-in-form"
        onSubmit={(e) => {
          e.preventDefault();
          signInUser(signInParams);
        }}
      >
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required={true}
            onChange={(e) => {
              setSignInParams({
                ...signInParams,
                email: e.target.value,
              });
            }}
          />
          {errorMessage.includes("Email") && (
            <p className={"register-error-message" + " " + hideEmail}>
              {errorMessage}
            </p>
          )}
        </label>

        <label htmlFor="password">
          Password
          <i
            className={"password-toggle fa-regular fa-eye" + " " + toggle}
            id="password-toggle"
            onClick={() => {
              togglePassword();
            }}
          ></i>
          <i
            onClick={togglePassword}
            className={
              controlShow.active === "yes"
                ? "fa-regular fa-eye-slash password-toggle-slash visible"
                : "fa-regular fa-eye-slash password-toggle-slash"
            }
          ></i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required={true}
            onChange={(e) =>
              setSignInParams({
                ...signInParams,
                password: e.target.value,
              })
            }
          />
          {errorMessage.includes("password") && (
            <p className={"register-error-message" + " " + hidePassword}>
              {errorMessage}
            </p>
          )}
        </label>
        <button className="sign-in-button">Sign In</button>
      </form>
      <hr className="sign-in-divider" />
      <div className="sign-in-new">
        <h1>New to Victoria's Shop?</h1>
        <p>Create an account to get 15% off!</p>
      </div>
      <Link to="/register">
        <button className="sign-in-create">Create Account</button>
      </Link>
    </div>
  );
};

export default SignIn;
