import React from "react";
import "../../src/styles/Login.css";
import Input from "../components/Input";
import Button from "../components/Button";
import Hyperlink from "../components/Hyperlink";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigateTo = useNavigate();
  const onSubmitHandler = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Perform any form processing logic here
    console.log("href");
    navigateTo("/home");
    console.log("Form submitted!");
  };

  return (
    <>
      <div className="main-container">
        <img
          className="side-image"
          src="../src/assets/butterfly.png"
          alt="Butterfly"
        />
        <div className="login-container">
          <h2 className="h2">Login</h2>
          <form onSubmit={onSubmitHandler}>
            <Input type="text" placeHolder="Username" />
            <Input type="password" placeHolder="Password" />
            <Button text="Login" onClick={onSubmitHandler} />
            <Hyperlink text="Register Instead" link="/register" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
