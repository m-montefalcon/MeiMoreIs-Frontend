import React from "react";
import "../../src/styles/Input.css";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

const InputComponent = (props) => {
  return (
    <>
      <InputGroup className="mb-4">
        {props.logo && (
          <InputGroup.Text id="basic-addon1">{props.logo}</InputGroup.Text>
        )}
        <FormControl
          type={props.type}
          placeholder={props.placeHolder}
          aria-label="Username"
          aria-describedby="basic-addon1"
          required
        />
      </InputGroup>
    </>
  );
};

export default InputComponent;
