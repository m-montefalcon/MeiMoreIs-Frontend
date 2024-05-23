import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CardsComponents = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card.Body>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://i8.amplience.net/i/naras/MI0004224402-MN0002709646"
              className="rounded-circle"
              alt="..."
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <div>
              <Card.Title>Kendrick Lamar</Card.Title>
              <Card.Subtitle
                className="text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                9:00 AM August 30, 2001
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text className="mt-3">
            A.m. to the p.m., p.m. to the a.m., funk Eat up your per diem, you
            just gotta hate 'em, funk If I quit your BM, I still ride Mercedes,
            funk If I quit this season, I still be the greatest, funk{" "}
          </Card.Text>
          <Card.Img
            variant="top"
            src="https://variety.com/wp-content/uploads/2017/11/kendrick-lamar-variety-hitmakers.jpg?w=1000"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                marginLeft: "10px",
                marginRight: "5px", // Adjusted margin for better spacing
                fontSize: "24px", // Added font size to make the heart icon larger
              }}
            />
            <p style={{ marginBottom: "0", marginTop: "0", marginLeft: "5px" }}>
              312,123 likes
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsComponents;
