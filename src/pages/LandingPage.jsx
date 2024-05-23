import React, { useState } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
const LandingPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authRender = () => {
    return isAuthenticated ? <HomePage /> : <LoginPage />;
  };

  return <>{authRender()}</>;
};

export default LandingPage;
