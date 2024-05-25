import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import axios from "axios";

const LandingPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const result = await axios.get("http://localhost:8000");
        if (result.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          navigateTo("/login");
        }
      } catch (error) {
        console.error("Error:", error);
        setIsAuthenticated(false);
        navigateTo("/login");
      }
    };

    checkAuthentication();
  }, []); // Empty dependency array ensures the effect runs only once

  return isAuthenticated ? <HomePage /> : <LoginPage />;
};

export default LandingPage;
