import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { firebaseApp } from "../../../service/firebaseConfig";
import { getUserDataFromLocalStorage } from "../../util/localStorageUtils";
const CardsComponents = (props) => {
  const [isFilled, setIsFilled] = useState(false);
  const [profileUrl, setProfileUrl] = useState(null);
  const [contentUrl, setContentUrl] = useState(null);

  const formattedTimestamp =
    new Date(props.data.timestamp).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }) +
    " " +
    new Date(props.data.timestamp).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const storage = getStorage(firebaseApp);
        const imageUrl = await getImageUrl(
          storage,
          `meimoreis/user/${props.data.profile_picture}`
        );
        const contentImage = await getImageUrl(
          storage,
          `meimoreis/post/${props.data.image}`
        );
        if (isMounted) {
          setProfileUrl(imageUrl);
          setContentUrl(contentImage);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const checkIfLiked = async () => {
      try {
        const currentUser = await getUserDataFromLocalStorage();
        const users = props.data.user_ids;
        const checkUser = users.find(
          (user) => user === currentUser.userData.id
        );
        if (isMounted) {
          setIsFilled(!!checkUser);
        }
      } catch (error) {
        console.error("Error checking if liked:", error);
      }
    };

    checkIfLiked();
    fetchData();

    return () => {
      isMounted = false; // Cleanup function to prevent state updates on unmounted components
    };
  }, [props.data]); // Add props.data as dependency if fetchData and checkIfLiked depend on it

  // Define the getImageUrl function
  const getImageUrl = async (storage, imagePath) => {
    try {
      const imageRef = ref(storage, imagePath);
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (error) {
      console.error("Error fetching image:", error);
      return null;
    }
  };
  return (
    <>
      <div key={props.data.post_id}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px", // Add margin between cards
          }}
        >
          <Card
            style={{
              width: "500px",
              backgroundColor: "#f9f9f9",
              marginBottom: "20px", // Add margin between cards
            }}
          >
            <Card.Body>
              {/* Profile information */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={profileUrl}
                  className="rounded-circle"
                  alt="..."
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    flexShrink: 0, // Prevent image from resizing
                  }}
                />
                <div>
                  <Card.Title>
                    {props.data.f_name} {props.data.l_name}
                  </Card.Title>
                  <Card.Subtitle
                    className="text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {formattedTimestamp}
                  </Card.Subtitle>
                </div>
              </div>

              <Card.Text className="mt-3" style={{ marginBottom: "10px" }}>
                {props.data.content}
              </Card.Text>

              <div style={{ overflow: "hidden", marginBottom: "10px" }}>
                <img
                  src={contentUrl}
                  alt="Post Image"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }} // Set a fixed height for the image and adjust object-fit
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div onClick={toggleHeart} style={{ cursor: "pointer" }}>
                  <FontAwesomeIcon
                    icon={isFilled ? solidHeart : regularHeart}
                    style={{
                      marginLeft: "10px",
                      marginRight: "5px",
                      fontSize: "24px",
                    }}
                  />
                </div>
                <p
                  style={{
                    marginBottom: "0",
                    marginTop: "0",
                    marginLeft: "5px",
                  }}
                >
                  {props.data.counts} likes
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CardsComponents;
