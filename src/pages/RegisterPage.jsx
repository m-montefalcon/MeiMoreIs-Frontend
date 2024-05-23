import { useNavigate } from "react-router-dom";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Hyperlink from "../components/Hyperlink";
import "../styles/Register.css";
const RegisterPage = () => {
  const navigateTo = useNavigate();

  const onClickFunction = () => {
    console.log("href");
    navigateTo("/login");
  };
  return (
    <>
      <div className="main-container">
        <div className="register-container">
          <h2 className="h2">Login</h2>
          <form>
            <Input type="text" placeHolder="Full name" />
            <Input type="email" placeHolder="Email address" />
            <Input type="password" placeHolder="Confirm password" />
            <Input type="password" placeHolder="Password" />
            <Button text="Register" clickFunction={onClickFunction} />
            <Hyperlink text="Login Instead" link="/login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
