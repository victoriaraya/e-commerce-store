import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [signInParams, setSignInParams] = useState({
    email: "",
    password: "",
  });
  const [controlShow, setControlShow] = useState({ active: "no" });

  const navigate = useNavigate();

  const signInUser = async (signInParams) => {
    await fetch("http://localhost:4000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInParams),
    });
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

  return (
    <div className="sign-in-page">
      <img className="sign-in-image" src="./images/sunset.png" alt="sunset" />
      <h1 className="sign-in-title">Sign in</h1>
      <form
        className="sign-in-form"
        onSubmit={(e) => {
          e.preventDefault();
          signInUser(signInParams);
          //navigate("/welcome-back");
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
        </label>

        <label htmlFor="password">
          Password
          <i
            className={"password-toggle fa-regular fa-eye" + " " + toggle} //
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
