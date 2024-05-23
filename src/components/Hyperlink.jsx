import React from "react";
import "../../src/styles/Hyperlink.css";

const Hyperlink = (props) => {
  return (
    <a className="hyperlink" href={props.link}>
      {props.text}
    </a>
  );
};

export default Hyperlink;
