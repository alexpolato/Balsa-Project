import React, { useState, useEffect } from "react";
import app from "./base";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [correntUser, setCorrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCorrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ correntUser }}>
      {children}
    </AuthContext.Provider>
  );
};
