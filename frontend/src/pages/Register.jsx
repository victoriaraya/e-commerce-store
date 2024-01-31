import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [registerParams, setRegisterParams] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const registerUser = async (registerParams) => {
    await fetch("http://localhost:4000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerParams),
    }).then((res) => {
      return res.status; //figure out how to access code to display custom message like invalid password
    });
  };

  return (
    <div className="register-page">
      <img className="register-image" src="./images/sunset.png" alt="sunset" />
      <h1 className="register-title">Register</h1>
      <form
        className="register-form"
        onSubmit={async (e) => {
          e.preventDefault();
          registerUser(registerParams);
          // statusCode == 400 || 401 ? (
          //   <div>invalid input</div>
          // ) : (
          //   navigate("/welcome")
          // );
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
        </label>
        <label htmlFor="password">
          Password
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
