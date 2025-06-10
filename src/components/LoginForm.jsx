import React, { useState } from "react";
import "./styles/LoginForm.css";

const LoginForm = () => {
  const account1 = {
    username: "Esmail",
    pin: 1234,
  };
  const account2 = {
    username: "Ali",
    pin: 5678,
  };
  const account3 = {
    username: "Ahmed",
    pin: 9101,
  };
  const account4 = {
    username: "Hassan",
    pin: 1122,
  };

  const accounts = [account1, account2, account3, account4];

  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const valueHandler = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else {
      setPin(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchingAccount = accounts.find(
      (account) => account.username === username && account.pin === Number(pin)
    );
    if (matchingAccount) {
      setError("Login successful");
    } else {
      setError("Invalid username or pin");
    }
  };

  return (
    <div>
      <form action="" className="sign-in-form">
        <label htmlFor="username">
          Username
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={valueHandler}
            id="username"
          />
        </label>
        <label htmlFor="pin">
          Pin
          <input
            type="password"
            placeholder="Password"
            value={pin}
            onChange={valueHandler}
            id="pin"
          />
        </label>
        <button type="submit" className="loginbtn" onClick={handleSubmit}>
          Login
        </button>
        <div className="error">{error && <div>{error}</div>}</div>
      </form>
    </div>
  );
};

export default LoginForm;
