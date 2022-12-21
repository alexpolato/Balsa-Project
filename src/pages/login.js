import React, { useState } from "react";
import paths from "../utils/paths";
import { useAuth } from "../autentication/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";

const defaultData = {
  email: "",
  password: "",
};

function Login() {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState(defaultData);

  const handleSignUp = async (event) => {
    try {
      throw new Error(`fudeu`);
      const result = await logIn(data.email, data.password);
      navigate(paths.home);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        value={data.email}
        onChange={(e) =>
          setData((prev) => {
            return { ...prev, email: e.target.value };
          })
        }
        name="email"
        type="email"
        placeholder="email"
      />
      <input
        value={data.password}
        onChange={(e) =>
          setData((prev) => {
            return { ...prev, password: e.target.value };
          })
        }
        name="password"
        type="password"
        placeholder="senha"
      />
      <button onClick={handleSignUp} type="submit">
        Login
      </button>
      <Button>aaa</Button>
    </div>
  );
}

export default Login;
