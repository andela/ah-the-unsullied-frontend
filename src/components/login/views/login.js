import React from "react";
import { Link } from "react-router-dom";

const LoginView = () => {
  return (
    <form>
      <h1> Login </h1>
      <input type="text" name="email" />
      <br />
      <input type="password" name="password" />
      <br />
      <Link to="/">
        <button type="submit">Login</button>
      </Link>
    </form>
  );
};

export default LoginView;
