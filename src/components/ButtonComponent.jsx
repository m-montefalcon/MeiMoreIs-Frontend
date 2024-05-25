import React from "react";
import "../../src/styles/Button.css";
import ButtonBootstrap from "react-bootstrap/Button";

const ButtonComponent = (props) => {
  return (
    <div className="button-container">
      <ButtonBootstrap variant="primary" type="submit">
        {props.text}
      </ButtonBootstrap>
    </div>
  );
};

export default ButtonComponent;
