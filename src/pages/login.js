import React, { useCallback, useContext } from "react";
import { WithRouter, Navigate } from "react-router";
import { AuthContext } from "../autentication/auth";
import app from "../autentication/base";
import paths from "../utils/paths";

function Login({ history }) {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to={paths.home} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input name="email" type="email" placeholder="email" />
        <input name="password" type="password" placeholder="senha" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
