import React, { useCallback } from "react";
import app from "../autentication/base";
import { WithRouter } from "react-router";
// import paths from "../utils/paths";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSignUp}>
        <input name="email" type="email" placeholder="email" />
        <input name="password" type="password" placeholder="senha" />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
