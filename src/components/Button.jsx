import React from "react";
import "../../src/styles/Button.css";
const Button = (props) => {
  return (
    <div className="button-container">
      <button
        className="button"
        onClick={() => {
          props.onClick();
        }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
