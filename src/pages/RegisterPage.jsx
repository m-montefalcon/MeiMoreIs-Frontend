import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Input from "../components/InputComponent";
import Button from "../components/ButtonComponent";
import Hyperlink from "../components/Hyperlink";

import "../styles/Register.css";

const RegisterPage = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_API_ENDPOINT;

  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: null,
  });

  const navigateTo = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAvatarChange = (event) => {
    const selectedFile = event.target.files[0];

    // Read the selected file and convert it to a data URL
    const reader = new FileReader();
    reader.onload = () => {
      setFormData({
        ...formData,
        avatar: reader.result, // Set the data URL as the avatar in the state
      });
    };
    reader.readAsDataURL(selectedFile);
  };

  const navigateToRegisterFunction = () => {
    navigateTo("/login");
  };

  const submitForm = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Handle form submission logic
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const result = await axios.post(
        `${baseUrl}/user/register`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (result.status === 200) {
        console.log(result.data);
      } else {
        console.log(result.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main-container">
      <img
        className="side-image"
        src="../src/assets/butterfly.png"
        alt="Butterfly"
      />

      <div className="register-container">
        <h2 className="h2">Sign Up</h2>

        <form onSubmit={submitForm}>
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center" style={{ width: "23%" }}>
                <div
                  className="avatar-container"
                  style={{ padding: "0px" }}
                  onClick={() =>
                    document.getElementById("avatar-input").click()
                  }
                >
                  <div
                    className="avatar"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      border: "2px solid #ccc",
                      cursor: "pointer",
                    }}
                  >
                    {formData.avatar ? (
                      <img
                        src={formData.avatar}
                        alt="Selected Avatar"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon icon={faUser} />
                    )}
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  style={{ display: "none" }}
                  id="avatar-input"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Input
                  type="text"
                  name="firstName"
                  placeHolder="First name"
                  handleEvent={handleInputChange}
                />
              </Col>
              <Col xs={6}>
                <Input
                  type="text"
                  name="lastName"
                  placeHolder="Last name"
                  handleEvent={handleInputChange}
                />
              </Col>
            </Row>
            <Input
              type="email"
              name="email"
              placeHolder="Email address"
              logo={<FontAwesomeIcon icon={faEnvelope} />}
              handleEvent={handleInputChange}
            />
            <Input
              type="password"
              name="password"
              placeHolder="Password"
              logo={<FontAwesomeIcon icon={faKey} />}
              handleEvent={handleInputChange}
            />
            <Input
              type="password"
              name="confirmPassword"
              placeHolder="Confirm password"
              logo={<FontAwesomeIcon icon={faKey} />}
              handleEvent={handleInputChange}
            />
            <Button text="Register" />
            <Hyperlink text="Login Instead" link="/login" />
          </Container>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
