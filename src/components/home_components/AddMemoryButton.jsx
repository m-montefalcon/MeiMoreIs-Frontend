import React from "react";
import Button from "react-bootstrap/Button";

const AddMemoryButton = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          margin: 0,
        }}
      >
        <Button
          variant="primary"
          style={{
            marginTop: "30px",
            marginBottom: "15px",
            width: "500px",
            backgroundColor: "#61677A",
            borderBlockColor: "grey",
            color: "white",
          }}
        >
          {" "}
          <b> Save new memory</b>
        </Button>
      </div>
    </>
  );
};

export default AddMemoryButton;
