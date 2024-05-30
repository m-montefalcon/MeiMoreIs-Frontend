// AvatarInput.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";

const AvatarInput = ({ imageURL, handleAvatarChange }) => {
  return (
    <div
      className="avatar-container"
      style={{ padding: "0px" }}
      onClick={() => document.getElementById("avatar-input").click()}
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
        {imageURL ? (
          <img
            src={imageURL}
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
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleAvatarChange}
        style={{ display: "none" }}
        id="avatar-input"
      />
    </div>
  );
};

export default AvatarInput;
