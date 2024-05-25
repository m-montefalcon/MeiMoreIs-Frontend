import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import "./styles/App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>    b   
    </BrowserRouter>
  );
}

export default App;
