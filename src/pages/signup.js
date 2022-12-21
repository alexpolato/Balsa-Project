import React, { useState } from "react";
import paths from "../utils/paths";
import { useAuth } from "../autentication/auth";
import { useNavigate } from "react-router-dom";

const defaultData = {
  email: "",
  password: "",
};

const SignUp = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState(defaultData);

  const handleSignUp = async (event) => {
    try {
      const result = await signUp(data.email, data.password);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>SignUp</h1>
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
        SignUp
      </button>
      <button onClick={() => navigate(paths.home)}>home</button>
    </div>
  );
};

export default SignUp;
