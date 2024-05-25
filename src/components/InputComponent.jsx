import React from "react";
import "../../src/styles/Input.css";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

const InputComponent = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
          margin: "0 auto", // Centers the div horizontally within its container
        }}
      >
        <InputGroup className="mb-4">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <FormControl
            type={props.type}
            placeholder={props.placeHolder}
            aria-label="Username"
            aria-describedby="basic-addon1"
            required
          />
        </InputGroup>
      </div>
    </>
  );
};

export default InputComponent;
