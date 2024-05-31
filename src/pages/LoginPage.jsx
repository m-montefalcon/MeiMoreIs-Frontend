import React, { useState } from "react";
import "../../src/styles/Login.css";
import InputComponent from "../components/InputComponent";
import Hyperlink from "../components/Hyperlink";
import { useNavigate } from "react-router-dom";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import ButtonComponent from "../components/ButtonComponent";
import { Row, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { saveUserDataToLocalStorage } from "../util/localStorageUtils.js";
axios.defaults.withCredentials = true; // Send cookies with requests

const LoginPage = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_API_ENDPOINT;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const clearFormData = async () => {
    await setFormData({
      email: "",
      password: "",
    });
  };
  const navigateTo = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      setSubmitting(true); // Start form submission
      const result = await axios.post(`${baseUrl}/user/login`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Change to form data type
        },
      });
      if (result.status === 200) {
        saveUserDataToLocalStorage(result.data);
        await clearFormData();
        navigateTo("/home");
      } else {
        console.log(result.data);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false); // End form submission
    }
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
          <Container>
            <Form onSubmit={onSubmitHandler}>
              <InputComponent
                name="email"
                type="text"
                placeHolder="Username"
                logo=<FontAwesomeIcon icon={faEnvelope} />
                handleEvent={handleInputChange}
                minLength="8"
                disabled={submitting}
              />
              <InputComponent
                name="password"
                type="password"
                placeHolder="Password"
                logo=<FontAwesomeIcon icon={faKey} />
                handleEvent={handleInputChange}
                minLength="8"
                disabled={submitting}
              />
              <ButtonComponent text="Login" />
              <Hyperlink text="Register Instead" link="/register" />
            </Form>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
