import React from "react";

import "../../src/styles/Input.css";
const Input = (props) => {
  return (
    <input
      className="input"
      type={props.type}
      placeholder={props.placeHolder}
      required={true}
    />
  );
};

export default Input;
