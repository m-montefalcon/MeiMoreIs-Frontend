import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Input from "../components/InputComponent";
import Button from "../components/ButtonComponent";
import Hyperlink from "../components/Hyperlink";
import { Row, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/Register.css";
import { InputGroup, FormControl } from "react-bootstrap";
const RegisterPage = () => {
  const [avatar, setAvatar] = useState(null);
  const [isAvatarSelected, setIsAvatarSelected] = useState(false);

  const handleAvatarClick = () => {
    document.getElementById("avatar-input").click(); // Ensure this element exists
  };

  const handleAvatarChange = (event) => {
    const selectedFile = event.target.files[0];
    setAvatar(URL.createObjectURL(selectedFile));
    setIsAvatarSelected(true);
  };

  const navigateTo = useNavigate();

  const onClickFunction = () => {
    console.log("href");
    navigateTo("/login");
  };

  return (
    <>
      <div className="main-container">
        <img
          className="side-image"
          src="../src/assets/butterfly.png"
          alt="Butterfly"
        />

        <div className="register-container">
          <h2 className="h2">Sign Up</h2>

          <form>
            <Container>
              <Row className="justify-content-center">
                <Col xs={12} className="text-center" style={{ width: "23%" }}>
                  <div
                    className="avatar-container"
                    style={{ padding: "0px" }}
                    onClick={handleAvatarClick}
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
                      {isAvatarSelected ? (
                        <img
                          src={avatar}
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
                  <Input type="text" placeHolder="First name" />
                </Col>
                <Col xs={6}>
                  <Input type="text" placeHolder="Full name" />
                </Col>
              </Row>
              <Input
                type="email"
                placeHolder="Email address"
                logo={<FontAwesomeIcon icon={faEnvelope} />}
              />

              <Input
                type="password"
                placeHolder="Password"
                logo={<FontAwesomeIcon icon={faKey} />}
              />
              <Input
                type="password"
                placeHolder="Confirm password"
                logo={<FontAwesomeIcon icon={faKey} />}
              />
              <Button text="Register" clickFunction={onClickFunction} />
              <Hyperlink text="Login Instead" link="/login" />
            </Container>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
