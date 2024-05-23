import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalComponent from "./ModalComponent";

const AddMemoryButton = () => {
  const [showModal, setShowModal] = useState(false);

  const triggerModal = () => {
    setShowModal(!showModal);
  };

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
          onClick={triggerModal}
        >
          <b> Post new memory</b>
        </Button>
      </div>
      <ModalComponent show={showModal} handleClose={triggerModal} />
    </>
  );
};

export default AddMemoryButton;
