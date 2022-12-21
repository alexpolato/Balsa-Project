import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth";
import paths from "../utils/paths";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <>Loading</>;
  }

  if (!user) {
    return <Navigate to={paths.login} />;
  }

  return children;
};

export default PrivateRoutes;
