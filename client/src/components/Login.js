import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";

function Login({ setCurrentUser }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push("/mainpage");
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };

  return (
    <div className="authForm">
      <Redirect to="/" />
      <form onSubmit={handleSubmit}>
        <h1>Welcome to Oldegg</h1>
        <h2>Please Log In To Start Shopping!</h2>
        <p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button type="submit">Log In</button>
        </p>
        <p>OR</p>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
