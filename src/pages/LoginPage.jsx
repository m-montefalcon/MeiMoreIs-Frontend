import React from "react";
import "../../src/styles/Login.css";
import Input from "../components/InputComponent";
import Hyperlink from "../components/Hyperlink";
import { useNavigate } from "react-router-dom";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import ButtonComponent from "../components/ButtonComponent";
const LoginPage = () => {
  const navigateTo = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted!");
    navigateTo("/home");
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
          <Form onSubmit={onSubmitHandler}>
            <Input type="text" placeHolder="Username" />
            <Input type="password" placeHolder="Password" />
            <ButtonComponent text="Login" />
            <Hyperlink text="Register Instead" link="/register" />
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
