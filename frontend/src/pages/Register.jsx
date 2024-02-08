import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "../contexts/SignInContext";

const Register = () => {
  const [registerParams, setRegisterParams] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [controlShow, setControlShow] = useState({ active: "no" });
  const [errorMessage, setErrorMessage] = useState("");
  const { updateSignInStatus } = useSignIn();
  const navigate = useNavigate();

  const registerUser = async (registerParams) => {
    try {
      const response = await fetch("http://localhost:4000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerParams),
      });

      if (!response.ok) {
        if (response.status === 406) {
          document.getElementById("email").value = "";
          setErrorMessage(
            errorMessage ===
              "Email already registered. Please enter a different email."
              ? "Email already registered. Please enter a different email. "
              : "Email already registered. Please enter a different email."
          );
        }
      } else {
        const data = await response.json();
        const token = data.token;
        let name = data.name;
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        updateSignInStatus(true);
        navigate("/welcome");
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

  const hide = document.getElementById("email")?.value.length > 0 ? "hide" : "";

  return (
    <div className="register-page">
      <img className="register-image" src="./images/sunset.png" alt="sunset" />
      <h1 className="register-title">Register</h1>
      <form
        className="register-form"
        onSubmit={async (e) => {
          e.preventDefault();
          registerUser(registerParams);
        }}
      >
        <label htmlFor="firstName">
          First Name
          <input
            name="firstName"
            id="firstName"
            placeholder="First Name"
            required={true}
            onChange={(e) =>
              setRegisterParams({
                ...registerParams,
                firstName: e.target.value,
              })
            }
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            required={true}
            onChange={(e) =>
              setRegisterParams({
                ...registerParams,
                lastName: e.target.value,
              })
            }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required={true}
            onChange={(e) =>
              setRegisterParams({
                ...registerParams,
                email: e.target.value,
              })
            }
          />
          {errorMessage && (
            <p className={"register-error-message" + " " + hide}>
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
              setRegisterParams({
                ...registerParams,
                password: e.target.value,
              })
            }
          />
        </label>
        <button className="register-button">Create Account</button>
      </form>
      <Link to="/sign-in">
        <button className="register-go-back">← Go back</button>
      </Link>
    </div>
  );
};

export default Register;
